const mongoose = require('mongoose')

const { Schema } = mongoose

const AuthorSchema = new Schema(
    {
        first_name: { type: String, required: true, max: 100 },
        last_name: { type: String, required: true, max: 100} ,
        date_of_birth: { type: Date },
        date_of_death: { type: Date },
    }
)

AuthorSchema.virtual('name').get(() => {
    return `${ this.last_name } ' ' ${ this.first_name }`
})

AuthorSchema.virtual('url').get(() => {
    return `/catalog/author/  ${ this.id }`
})

module.exports = mongoose.model('Author', AuthorSchema)