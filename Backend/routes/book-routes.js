const express=require('express');
const router=express.Router();
const Book =require("../model/Book");
const booksController=require("../controllers/books-contoller");








router.get("/",booksController.getALLBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
   



module.exports=router;