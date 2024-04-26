const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/user", require("./routes/userRoute"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("hi");
});
