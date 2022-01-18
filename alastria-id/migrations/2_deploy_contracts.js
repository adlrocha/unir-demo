var aim = artifacts.require("./contracts/AlastriaIdentityManager.sol");
var bim = artifacts.require("./contracts/BasicIdentityManager.sol");
var proxy = artifacts.require("./contracts/proxy.sol");
var txrelay = artifacts.require("./contracts/TxRelay.sol");
var im = artifacts.require("./contracts/IdentityManager.sol");
var mim = artifacts.require("./contracts/MetaIdentityManager.sol");
var AlastriaRegistry = artifacts.require("./contracts/AlastriaRegistry.sol");
var UportRegistry = artifacts.require("./contracts/UportRegistry.sol");

function deployUport(deployer){
  deployer.deploy(im);
  deployer.deploy(mim);
  deployer.deploy(proxy);
  deployer.deploy(UportRegistry);
  deployer.deploy(txrelay);
};

function deployAlastriaIdentity(deployer){
  deployer.deploy(AlastriaRegistry, "0x00000000000000000000000000000000").then(function() {
  	return deployer.deploy(aim,0,0,0,AlastriaRegistry.address);
  }).then(function() {
        return deployer.deploy(bim,0,0,0,AlastriaRegistry.address);
  });

  deployer.deploy(proxy);
};

module.exports = function(deployer, network) {
  web3.personal.unlockAccount(web3.eth.accounts[0], "Passw0rd");
  if (network === 'alastria.uport') {
    deployUport(deployer);
  }
  else if (network === 'alastria.identity') {
    deployAlastriaIdentity(deployer);
  }

};
