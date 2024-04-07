const express=require("express");
const librarian=require('../controllers/LibrarianController')

const router=express.Router();

//get All librarian
router.get("/",librarian.getAllLibrarian);


//get All librarian
router.get("/:id",librarian.getLibrarianByid);


//add librarian
router.post("/",librarian.addLibrarain);

//delete librarian
router.delete('/',librarian.deleteLibrarain)


//block librarian
router.patch('/',librarian.blockLibrarain)


module.exports=router;


