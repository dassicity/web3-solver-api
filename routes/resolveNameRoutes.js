const express = require("express");

const { resolveEthInfo } = require("../controllers/ethController");
const { resolveSolInfoDomain } = require("../controllers/solController");
const { resolveBscInfo } = require("../controllers/bscController");

const router = express.Router();

router.get("/resolve/:domain", async (req, res, next) => {
    let domainName = req.params.domain;

    let response;

    if (domainName.endsWith(".eth")) {
        response = await resolveEthInfo(domainName);
    }
    else if (domainName.endsWith(".sol")) {
        response = await resolveSolInfoDomain(domainName);
    }
    else if (domainName.endsWith(".bnb")) {
        response = await resolveBscInfo(domainName);
    }

    if (response) {
        res.status(201).json({ response });
    }
    else {
        res.status(404).json({ response });
    }
});

module.exports = router;