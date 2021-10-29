require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember push hover enter onion skirt'; 
let testAccounts = [
"0xb6e2f7ac8f415e1ab3954faadc694e0fab94a7fc4a5339ac35c2be4415c7dab1",
"0xd652846274904c9e3748b2b298763e84897bca3fa06b79079ffe9c191ede5003",
"0xe1616eb91b982890c87c3b79ae2a8fe245db8d65427301554c2c27e01993513c",
"0x06e9929cf0855c5abb2f1fbe0b20e1e58b7fe482e4f35789e428b59bb938fe81",
"0x98bc8447637c74a9324e348d4733604026d282fb0dc10ec87e0fd7a95b40e92b",
"0xc5f1473537a74e7ce85de569e4302651d4f01cc429a62b42b038ada6faabd695",
"0x2cc0c5ed9957277d23f1449a9bdcf49b8d456abcd7de134cee95314fd1aeee7a",
"0x2f96ba12d3a60c9c9e956cd8a7eeeca7dc31af6ec318166fd50a806bf376b47d",
"0x5b28ea3a90333eb922c38f1549aea8bceab7fb7613981c3da744ba93a976a64b",
"0xf39e6a373d236faaf1e2aa29501ad6424a0aabf8fa332a84e525c07053aaa0c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

