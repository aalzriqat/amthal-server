const express = require("express");
const {randomMathal,randomTen} = require("./handler")
const app = express();

app.use((req,res,next) => {
res.header("Access-Control-Allow-Origin","*");
next();
});
app.get("/", (req, res) => {
    res.send("Server is working correctly");
  });
 
app.get("/amthal/random",(req,res) =>{
    res.json(randomMathal());
});

app.get("/amthal/ten",(req,res) =>{
    res.json(randomTen());
});

app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type:"error",
        message: err.message
    })
})

const port = process.env.PORT || 3009;
app.listen(port,()=>{
    console.log("Server Started On Port " + port);
})