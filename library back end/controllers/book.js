const Book = require("../model/book");


//get all book
async function getBookHandler(req,res)
    {
        const allBooks = await Book.find({},{_id: 0, __v: 0});
        if (res !== undefined)
        {
        return res.json(allBooks);

        }
        else{
            res.send("data not found")
            }
    };


// add Book
async function AddBook(req,res)
{  
    await Book.create({ id: req.body.id,
                        title: req.body.title,
                        author:req.body.author,

                        Branch:req.body.Branch,


                        year:req.body.year,

                        edition:req.body.edition,
                        
                        quantity:req.body.quantity});


    res.send("data inserted Sucessfully");           
};



module.exports = {AddBook,getBookHandler};


