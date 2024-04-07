const mongoose=require("mongoose");

const transactionSchema = new mongoose.Schema({
    TransactionID: { type: String, required: true, unique: true },
    LibrarianID: { type: String, required: true, unique: true },
    StudentID: { type: String, required: true },
    BookID: { type: String, required: true },
    Date: { type: Date, required: true },
    Type: { type: String, enum: ['issue', 'return'], required: true },
  });


const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports=Transaction;