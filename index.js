const str = require('string-to-stream')
const merge2 = require('merge2')

module.exports = function (preString, stream, postString) {
    return merge2(str(preString), stream, str(postString))
}
