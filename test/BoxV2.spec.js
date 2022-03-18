const { expect } = require('chai');
const { ethers } = require('hardhat');

let BoxV2;
let boxV2;

describe('BoxV2', () => {
    beforeEach(async () => {
        BoxV2 = await ethers.getContractFactory("BoxV2");
        boxV2 = await BoxV2.deploy();
        await boxV2.deployed();
    })

    // Test Cases
    it('retrieve returns a value previously stored', async () => {
        // Store a value
        await boxV2.store(42);

        // Test if the returned value is the same one
        // note that we need to use strings to compare the 256 bit integers
        expect((await boxV2.retrieve()).toString()).to.equal('42');
    });

    it('retrieve returns a value previously incremented', async () => {
        // Increment
        await boxV2.increment();

        expect((await boxV2.retrieve()).toString()).to.equal('1');
    })
})