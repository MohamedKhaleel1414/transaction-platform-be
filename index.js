require('dotenv').config()
require("./connection/db");
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require('body-parser')
const donRouter = require('./routes/infoRoute')
const paymentRouter = require("./routes/paymentRoute")

app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', donRouter)
app.use('/api/v1', paymentRouter)

app.listen(port, () => console.log(`I'm listening to port ${port}!`));