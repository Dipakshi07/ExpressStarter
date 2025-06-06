const express = require('express')
const Server = require('./src/config/serverConfig.js');
const connectDB = require('./src/config/dbConfig.js');


const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.listen(Server.PORT , async() =>{
     await connectDB();
    console.log(`Server is running on http://localhost:${Server.PORT}`);
});