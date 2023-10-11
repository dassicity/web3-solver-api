const express = require("express");

const nameRoutes = require("./routes/resolveNameRoutes");
const addressRoutes = require("./routes/resolveAddressRoutes");

const app = express();

app.use(express.json());

const PORT = 1331;

app.use("/api/name", nameRoutes);
app.use("api/address", addressRoutes);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})