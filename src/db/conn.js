const mongoose = require('mongoose');

//creating database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://harshit12:harshit12@cluster0.hywxxht.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})