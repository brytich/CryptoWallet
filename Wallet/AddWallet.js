const CoinKey = require('coinkey')

const ck = new CoinKey.createRandom()

console.log("Private Key (Wallet Import Format): " + ck.privateWif)
console.log("Private Key (b): " + ck.privateKey.toString('hex'))
console.log("Address: " + ck.publicAddress)