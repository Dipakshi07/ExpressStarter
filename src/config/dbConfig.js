const mongoose = require('mongoose');
const serverConfig = require('./serverConfig.js')


async function connectDB(){
    try{
        await mongoose.connect(serverConfig.db_url);
        console.log("Successfully connect to the mongodb server")
    }catch(error){
        console.log("Not connect to the mongodb server");
    }
};

module.exports = connectDB;