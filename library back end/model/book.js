const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the book schema
const bookSchema = new Schema({
    id:{type:Number, required:true},
    title: { type: String, required: true },
    author: { type: String, required: true }, 
    Branch:{type: String, required: true},
    year: { type: String, required: true },
    edition: { type: String, required: true },
    quantity: { type: Number, required: true }

});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Export the model for use in other parts of your application
module.exports = Book;



