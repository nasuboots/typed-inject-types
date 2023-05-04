'use strict'

const path = require('path')
const fs = require('fs/promises')

const max = Number(process.argv[2])

if (Number.isNaN(max)) {
  throw new Error('usage: node ./generate-class.js <number>')
}

const range = [...Array(max).keys()]

const src = `import { createInjector, tokens } from 'typed-inject'

class Class1 {}
${range
  .map(
    (i) => `class Class${i + 2} {
  constructor(private readonly class${i + 1}: Class${i + 1}) {}
  static inject = tokens('Class${i + 1}')
}`
  )
  .join('\n')}

const injector = createInjector()
  .provideClass('Class1', Class1)
  ${range
    .map((i) => `.provideClass('Class${i + 2}', Class${i + 2})`)
    .join('\n  ')}
`

fs.writeFile(path.resolve(__dirname, 'src/class.ts'), src, 'utf-8')
