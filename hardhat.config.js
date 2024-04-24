/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
    },
    linea: {
      url: "https://linea-sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 59141,
      accounts:[`#`]
    }
  },
  solidity: "0.8.3",
};
