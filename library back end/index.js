const express= require('express');
const studentRouter=require("./routes/student");
const bookRouter=require("./routes/book");
const bodyParser = require('body-parser');
const librarianRouter=require("./routes/librarian")

const cors=require('cors');
// const bodyParser = require('body-parser');
const {connectMOngoDb} = require("./connection");
const {logReqRes}=require("./middleware");


const app=express();
const PORT = 5000;
const url="mongodb://127.0.0.1:27017/library";


//connection
connectMOngoDb(url);


//middleware -  Plugin
app.use(logReqRes("reqLog.txt"));
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


// app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json());
// app.use(express.json({limit: '50mb'}));
// app.use(express.bodyParser({limit: '50mb'}));


//Routes
app.use('/student',studentRouter);
app.use('/book',bookRouter);
app.use('/librarian',librarianRouter);


app.get("/",(req,res)=>{
    res.send("Hello")
});

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("set")
});

app.listen(PORT,()=>{
    console.log(`Server is runing on port no: ${PORT}`);
});