const {Schema, model} = require('mongoose')

const ChisteSchema = Schema({
    setup: {
        type: String,
        required: [true, 'El setup es obligatorio']
    },
    punchline: {
        type: String,
        required: [true, 'Punchline es obligatorio']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

    

})

module.exports = model('Chiste', ChisteSchema)