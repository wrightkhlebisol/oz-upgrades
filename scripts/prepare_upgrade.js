const { ethers } = require("hardhat");

async function main() {
    const proxyAddress = "0xDe7ACB2f56868e2af20207FB5272Ba70389b7501";

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
}

main().then(() => {
    process.exit()
}).catch(e => {
    console.error(e);
    process.exit(1);
});