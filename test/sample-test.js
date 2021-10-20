const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token :", function () {
  it("Deploy & test name of contract : ", async function () {
    const Token = await token.getContractFactory();
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal();

  });
});
