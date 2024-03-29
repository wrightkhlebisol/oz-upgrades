// Load dependencies
const { expect } = require("chai");

let Box;
let box;

// Start test block
describe('Box', function () {
    beforeEach(async function () {
        // Deploy
        Box = await ethers.getContractFactory("Box");
        box = await Box.deploy();
        await box.deployed();
    });

    // Test case
    it('retrieves a value previously stored', async function () {
        // Store a value
        await box.store(42);

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await box.retrieve()).toString()).to.equal('42');
    });
});

