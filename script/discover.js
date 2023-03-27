const { Project, Node } = require('ts-morph')
const prettier = require('prettier')
const fs = require('fs')
const path = require('path')

const sourcePath = path.resolve(__dirname, '../src/**/*.ts')
const outputPath = path.resolve(__dirname, '../src/index.ts')

const project = new Project()
project.addSourceFilesAtPaths(sourcePath)
const sourceFiles = project.getSourceFiles()

/** @type {{ source: string, hasArg?: boolean, name: string, comment: string }[]} */
const sugars = []


/** @argument variable {import('ts-morph').VariableDeclaration} */
function isUtility(variable) {
  const typeText = variable.getType().getText()
  if (/\/helper/.test(typeText) === false) return false
  return /Utility\<.*\>/.test(typeText)
}

sourceFiles.forEach((file) => {
  const exportedDeclarations = file.getExportedDeclarations()

  console.log(`${file.getFilePath()}`)
  for (const key of exportedDeclarations.keys()) {
    const variable = file.getVariableDeclaration(key)
    if (!variable) continue
    if (!isUtility(variable)) continue
    const commentRanges = variable
      .getParent()
      .getParent()
      .getLeadingCommentRanges()
    const comment = commentRanges[commentRanges.length - 1]?.getText() ?? ''
    sugars.push({
      source: trimPath(file.getFilePath()),
      name: key,
      hasArg: hasArg(variable),
      comment,
    })
  }
})

/** @argument variable {import('ts-morph').VariableDeclaration} */
function hasArg(variable) {
  const typeText = variable.getType().getText()
  const execResult = /Utility\<.*\>/.exec(typeText)
  if (!execResult) return false
  const argsText = execResult[0].split('<').slice(1)[0].replace(/[\>\[\]]/g, '')
  return argsText.length > 0
}

// process.exit(1)

/** @argument s {string} */
function trimPath(s) {
  return s
    .split('src')
    .slice(1)
    .concat('.')
    .reverse()
    .join('')
    .replace('.ts', '')
    .replace('/index', '')
}

const importMap = new Map()

function addImport(source, name) {
  const names = importMap.get(source) ?? []
  names.push(name)
  importMap.set(source, names)
}

const properties = []

sugars.forEach(({ source, name, hasArg, comment }) => {
  addImport(source, name)

  if (hasArg) {
    properties.push(`${comment}
    ${name}=${name}\n`)
  } else {
    properties.push(`${comment}
    get ${name}() {
      return ${name}.bind(this)() as this
    }\n`)
  }
})

const textLines = ['// This file is generated by ./script/discover.js']
const exportNames = []
textLines.push("import { InterpolationPrimitive } from '@emotion/serialize'")

for (const key of importMap.keys()) {
  const names = importMap.get(key)
  textLines.push(`import {${names.join()}} from '${key}'`)
  exportNames.push(...names)
}

textLines.push('\nexport class Sugar extends Array<InterpolationPrimitive> {')

textLines.push(...properties)
textLines.push('}')
textLines.push(`\n export {${exportNames.join()}}`)
textLines.push(`\n export * from './main'`)

const prettierConfig = prettier.resolveConfig.sync(
  path.resolve(__dirname, '../.prettierrc')
)
prettierConfig.parser = 'typescript'
const text = prettier.format(textLines.join('\n'), prettierConfig)
fs.writeFileSync(outputPath, text)
console.log(text)
