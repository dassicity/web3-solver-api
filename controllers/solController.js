const { Connection, clusterApiUrl, PublicKey } = require('@solana/web3.js');
const { getDomainKey, NameRegistryState } = require("@bonfida/spl-name-service");
const axios = require('axios');

const connection = new Connection('https://api.mainnet-beta.solana.com');

async function resolveSolInfo(domain) {
    try {
        console.log(domain);

        const { pubkey } = await getDomainKey(domainName);

        if (response.data && response.data.result) {
            return response.data.result;
        }
        else {
            return profile = {
                message: "Domain name could not be resolved due to an unexpected error"
            };
        }
    } catch (error) {
        console.error('Error resolving Solana domain:', error);
        let profile = {
            message: "Domain name could not be resolved due to an unexpected error",
            error
        }
        return profile;
    }
}

module.exports = {
    resolveSolInfo
}