const { Connection, PublicKey } = require('@solana/web3.js');
const { getDomainKey, NameRegistryState, getAllDomains, reverseLookup } = require("@bonfida/spl-name-service");
require('dotenv').config();

const connection = new Connection(process.env.SOLCONNECTION);

async function resolveSolInfoDomain(domain) {
    try {
        // console.log(domain);

        const { pubkey } = await getDomainKey(domain);
        const { registry } = (await NameRegistryState.retrieve(connection, pubkey));

        const owner = registry.owner;
        const parent = registry.parentName;
        const class_type = registry.class;

        const ownerWallet = new PublicKey(owner);
        const allDomainKeys = await getAllDomains(connection, ownerWallet);
        const allDomainNames = await Promise.all(allDomainKeys.map(key => { return reverseLookup(connection, key) }));


        const response = {
            pubkey,
            owner,
            parent,
            class_type,
            allDomainNames
        };

        if (response) {
            return response;
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

async function resolveSolInfoAddress(address) {
    try {

        const ownerWallet = new PublicKey(address);
        const allDomainKeys = await getAllDomains(connection, ownerWallet);
        const allDomainNames = await Promise.all(allDomainKeys.map(key => { return reverseLookup(connection, key) }));

        const { pubkey } = await getDomainKey(allDomainNames[0]);
        const { registry } = (await NameRegistryState.retrieve(connection, pubkey));

        const owner = registry.owner;
        const parent = registry.parentName;
        const class_type = registry.class;

        const response = {
            pubkey,
            owner,
            parent,
            class_type,
            allDomainNames
        };

        if (response) {
            return response;
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
    resolveSolInfoDomain,
    resolveSolInfoAddress
}