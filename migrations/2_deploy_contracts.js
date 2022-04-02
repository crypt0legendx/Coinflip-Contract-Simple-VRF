const Coinflip = artifacts.require("Coinflip");

module.exports = function (deployer, network, accounts) {
  let vrfCoodinatorAddress =  "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
  let linkAddress="0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
  let fee=web3.utils.toWei("0.0001", "ether");
  let keyHash ="0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
  deployer.deploy(Coinflip, vrfCoodinatorAddress, linkAddress, fee, keyHash, {value: web3.utils.toWei("2", "ether"), from: accounts[0]});
};