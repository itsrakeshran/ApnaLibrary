const mongoose=require("mongoose");

async function connectMOngoDb(url){
    return mongoose
    .connect(url)
    .then(()=>{console.log("Mongodb is connected")})
    .catch((err)=>{console.log("mongo error:", err)});
};

module.exports={
    connectMOngoDb,
};


