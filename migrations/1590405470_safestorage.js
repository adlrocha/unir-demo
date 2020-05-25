module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
};


var SafeStorage = artifacts.require("SimpleSample");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(SafeStorage, 42, {privateFor: ["EOxvbW0cTlSFXCoG484EZR+t08FxavsL42xek4mNVkA="]})
};
