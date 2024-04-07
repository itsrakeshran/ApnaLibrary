const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    StudentID: {type: String, required: true },

    Name: {type: String, required: true },

    Email: {type: String,required: true },

    Mob: { type: String,required: true },

    Password: {type: String,required: true},

    IsBlocked: { type: Boolean, default: false },

    BlockReason: {type: String, default: ""  },

    MaxBooks: {type: Number, default: 2 },

    CurrentBooks: {type: Number,default: 0 }
});

module.exports = mongoose.model('Student', StudentSchema);
