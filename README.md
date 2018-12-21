# wrap-to-stream

在react ssr里，使用stream的时候，需要给renderToNodeString的组件外面包一层tag。

```
res.write( wrapToStream(`<div hidden><code id="${this.domid}-code">`,this.html, `</code></div>\n`))
```

## Install

```
$ npm i -S wrap-to-stream
```

## Usages

```
const wrapToStream = require('wrap-to-stream')

const fs = require('fs')

wrapToStream('hello\n', fs.createReadStream('./package.json'),'world\n').pipe(process.stdout) // => 'hi there'

```
