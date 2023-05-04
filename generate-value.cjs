'use strict'

const path = require('path')
const fs = require('fs/promises')

const max = Number(process.argv[2])

if (Number.isNaN(max)) {
  throw new Error('usage: node ./generate-value.js <number>')
}

const range = [...Array(max).keys()]

const src = `import { createInjector, tokens } from 'typed-inject'

const injector = createInjector()
  .provideValue('value1', 1)
  ${range
    .map((i) => `.provideValue('value${i + 2}', ${i + 2})`)
    .join('\n  ')}
`

fs.writeFile(path.resolve(__dirname, 'src/value.ts'), src, 'utf-8')
