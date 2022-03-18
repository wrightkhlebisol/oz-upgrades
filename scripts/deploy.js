async function main() {
    let Box = await ethers.getContractFactory('Box');
    console.log("Deploying Box...");
    let box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    console.log(`Box proxy deployed to: ${box.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    })