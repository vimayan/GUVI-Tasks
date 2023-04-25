const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./route");

require("dotenv").config(".env");

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',route);

app.use("*",(req,res)=>{
    res.status(404).send("Page Not Found")
});

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server listnening on PORT ${PORT}`);
});