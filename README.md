# wrap-to-stream


```
const wrapToStream = require('wrap-to-stream')

const fs = require('fs')

wrapToStream('hello\n', fs.createReadStream('./package.json'),'world\n').pipe(process.stdout) // => 'hi there'

```