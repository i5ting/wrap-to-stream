const wrapToStream = require('.')

const fs = require('fs')

wrapToStream('hello\n', fs.createReadStream('./package.json'),'world\n').pipe(process.stdout) // => 'hi there'