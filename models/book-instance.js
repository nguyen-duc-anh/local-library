const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookInstanceSchema = new Schema(
  {
    book: { type: Schema.ObjectId, ref: 'Book', required: true },
    imprint: { type: String, required: true },
    status: { type: String, required: true, 
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
        default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
  }
);

// Lấy ra URL của bookinstance
BookInstanceSchema
.virtual('url')
.get(() => {
  return `catalog/bookinstance/${ this._id }`
})

//Xuất mô hình
module.exports = mongoose.model('BookInstance', BookInstanceSchema)