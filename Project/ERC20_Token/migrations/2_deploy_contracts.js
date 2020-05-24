var SumemrToken = artifacts.require("SummerToken");

module.exports = function(deployer) {
  deployer.deploy(SumemrToken, "SummerTokenForFun", "ST-Token", 18, "888000000000000000000");
};