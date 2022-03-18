const { upgrades } = require("hardhat");

async function main() {
    const gnosisSafe = "0x1f7a3D5f882eC360c73d7C4a1cf13aE8664c7613";
    console.log("Transferring ownership of ProxyAdmin..");
    // Current owner can transfer ownership to GnosisSafe
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log("Transferred ownership of ProxyAdmin to: " + gnosisSafe);
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })