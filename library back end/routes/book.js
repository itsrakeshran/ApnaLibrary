const {getBookHandler, AddBook}=require('../controllers/book')
const express=require("express");

const router=express.Router();

router.get("/",getBookHandler);

router.post('/',AddBook);

module.exports=router;




