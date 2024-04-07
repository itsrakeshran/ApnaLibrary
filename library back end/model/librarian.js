const mongoose = require('mongoose');

const librarianSchema = new mongoose.Schema({
  EmpID: {type: String, required: true },

  Name: {type: String, required: true },

  Email: {type: String,required: true },

  Mob: { type: String,required: true },

  Password: {type: String,required: true},

  IsBlocked: { type: Boolean, default: false },

  BlockReason: {type: String, default: ""  }

  });

const Librarian = mongoose.model('Librarian', librarianSchema);

module.exports=Librarian;



