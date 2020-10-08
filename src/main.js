module.exports = {
  encode: function(input) {
    const encoded = Buffer.from(input, 'utf8').toString('base64')
    console.log(encoded)
  },
  decode: function(input) {
    const encoded = Buffer.from(input, 'base64').toString()
    console.log(encoded)
  },
};