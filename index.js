const express = require("express");

const nameRoutes = require("./routes/resolveNameRoutes");
const addressRoutes = require("./routes/resolveAddressRoutes");

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/name", nameRoutes);
app.use("/api/address", addressRoutes);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})