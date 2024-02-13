const mongoose = require('mongoose') 

const connectionSting = process.env.CONNECTION_STRING

mongoose.connect(connectionSting).then(()=>{
    console.log("MongoDb atlas connected successfully with pfServer");
}).catch((reason)=>{
    console.log(reason);
    console.log("MongooDb connection failed!!"); 

})

