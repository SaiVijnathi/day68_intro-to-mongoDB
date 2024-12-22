const mongoose = require("mongoose");

let connectToMDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://saivijnathitatikonda:saivijnathi@day68-intro-to-mongodb.q4dsd.mongodb.net/?retryWrites=true&w=majority&appName=day68-Intro-to-MongoDB");

        console.log("successfully connected to mongoDB");
    }
    catch(err){
        console.log("unable to connect to MDB",err.msg);
    }
};

connectToMDB();