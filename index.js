const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB =  'mongodb+srv://bhairavkarande:FICMe0ui5w7l6vej@cluster1.eiunssg.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster1';


mongoose.connect(DB).then((data) => {
    console.log("connection successful",data);
}).catch((err) => {
    console.log("wrong")
}) p
app.listen(8080,()=>{
    console.log("server listening on port:",8080);
})