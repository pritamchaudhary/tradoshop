const express = require('express');
const path = require('path');
require('./db/conn');
const bodyParser = require('body-parser');
const User = require("./models/usermessage");

const app = express();

const port = process.env.PORT || 3000;

//setting the path
const staticPath = path.join(__dirname, "../public/code");


app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(staticPath));


app.post("/login", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});

app.post("/signup", async(req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);
        const data =await User.create(req.body);
        console.log(data);
        res.redirect("/");
       
    } catch (error) {
        res.status(500).send(error);
        res.redirect("/");
    }
});



//server create
app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})