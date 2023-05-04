'use strict'

const path = require('path')
const fs = require('fs/promises')

const max = Number(process.argv[2])

if (Number.isNaN(max)) {
  throw new Error('usage: node ./generate-class.js <number>')
}

const range = [...Array(max).keys()]

const src = `import { createInjector, tokens } from 'typed-inject'

const func1 = () => {}
${range
  .map(
    (i) => `const func${i + 2} = () => {}
func${i + 2}.inject = tokens('func${i + 1}')`
  )
  .join('\n')}

const injector = createInjector()
  .provideFactory('func1', func1)
  ${range
    .map((i) => `.provideFactory('func${i + 2}', func${i + 2})`)
    .join('\n  ')}
`

fs.writeFile(path.resolve(__dirname, 'src/func.ts'), src, 'utf-8')
