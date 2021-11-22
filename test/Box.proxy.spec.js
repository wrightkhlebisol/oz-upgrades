// Load dependencies
const { expect } = require('chai');

let Box;
let box;

// Start test block
describe('Box (Proxy)', () => {
    beforeEach(async function () {
        Box = await ethers.getContractFactory('Box');
        box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    });

    // Test case
    it('retrieves a value previously initialised', async () => {
        // test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers

        expect((await box.retrieve()).toString()).to.equal('42');
    });
});