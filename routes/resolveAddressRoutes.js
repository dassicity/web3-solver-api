const express = require("express");

const { resolveEthInfo } = require("../controllers/ethController");
const { resolveSolInfoAddress } = require("../controllers/solController");
const { resolveBscInfo } = require("../controllers/bscController");

const router = express.Router();

router.get("/resolve/sol/:address", async (req, res, next) => {
    const address = req.params.address;

    response = await resolveSolInfoAddress(address);

    if (response) {
        res.status(201).json({ response });
    }
    else {
        res.status(404).json({ response });
    }
});

module.exports = router;