const express = require("express");

const app = express();

const PORT = 1331;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})