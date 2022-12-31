const { MNEMONIC } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    dev: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: MNEMONIC,
          },
        }),
      network_id: 2330,    // IOTEX mainnet chain id 4689, testnet is 4690
      gas: 3000000,
      gasPrice: 1000000000000,
      skipDryRun: true
    }
  }
}
