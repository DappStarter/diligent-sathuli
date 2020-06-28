require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind history inner dry force spoon'; 
let testAccounts = [
"0x18766c60745db6d8b2b4b2a1d4e075c01a21075fde7b6ba22dfdf6a79f0fc5c6",
"0xb20346d7304cfdd52d5e994752c54d666fc9cd45a760e6c4217d83b1c9ec72f5",
"0x6b012cb172fbb977cc60876ccff0297e5b3e647ed5b8eee44518642d2ddb0cc1",
"0x51d026c801182970b43488a7d3004ae7758e042425995e5a78ad530d46dde3cc",
"0x60308125c52191f355f81eb78afd73791e9a769b37ce70080057c69a6fcbf257",
"0x2dfec2b3a4624c16cc7020454e621c296b3b01dd1db365522320697d24012642",
"0x7f61b67ad0cdda8f5900eb7611148e91d7d82cd4ea89aa7bdd4df9918a27222f",
"0x2ac2761170b24525a790d0aeb14df875025fe2e6012559b2ffdd1452e22242e9",
"0x52c23cf0f2004a74cc13aac5074925f73d156955901fc5940dfce664ba6fd3a2",
"0x53388e10d13302fb873f3dfa69e2b3a3d1542d9a985d56125e83deb606723e4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
