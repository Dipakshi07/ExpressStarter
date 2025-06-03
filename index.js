const express = require('express')
const Server = require('./src/config/serverConfig.js')

const app = express();

app.listen(Server.PORT , () =>{
    console.log(`Server is running on http://localhost:${Server.PORT}`);
});