const { ethers } = require("ethers");
const { ENS } = require("@ensdomains/ensjs");

require("dotenv").config();

async function resolveEthInfo(domainName) {
    const provider = new ethers.JsonRpcProvider(process.env.ETHPROVIDER);

    const ENSInstance = new ENS();
    await ENSInstance.setProvider(provider);

    // const ens = setupPromise({ provider, registryAddress: getEnsAddress('1') });

    let profile;

    try {
        profile = await ENSInstance.getProfile('test.eth');

        return profile;

    } catch (error) {
        console.log(error);
        profile = {
            message: "Domain name could not be resolved due to an unexpected error"
        }
        return profile;
    }
}

module.exports = {
    resolveEthInfo,
};