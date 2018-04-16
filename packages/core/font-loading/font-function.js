const opentype = require('opentype.js')

/**
 * Return an ArrayBuffer from the binary string
 * @param {String} binaryString binary string
 * @returns {ArrayBuffer}
 */
function binaryStringToArrayBuffer (binaryString) {
  let length = binaryString.length
  let bytes = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}

/**
 * Return an opentype.Font object
 * @param {String} binaryString binary string
 * @param {Boolean} encoded is data encoded (base64)
 * @returns {opentype.Font}
 */
function font (data, encoded = true) {
  let binaryString = encoded ? atob(data) : data
  let buffer = binaryStringToArrayBuffer(binaryString)
  return opentype.parse(binaryStringToArrayBuffer(binaryString))
}

module.exports = font
