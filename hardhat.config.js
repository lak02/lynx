require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");
/** @type import('hardhat/config').HardhatUserConfig */

const COMPILER_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 1000000,
  },
};

module.exports = {
  paths: {
    artifacts: "./hardhat-artifacts",
    cache: "./hardhat-cache",
    sources: "./src",
    tests: "./tests",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.25",
        settings: COMPILER_SETTINGS,
      },
    ],
  },
};
