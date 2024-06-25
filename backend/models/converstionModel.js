const mongoose = require("mongoose")

const conversatiionSchema = new mongoose.Schema({

    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],

    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[]
        }
    ]
        // createAdt, updateAdt=> message.createAdt : 17:12 22/06/2024
},{timestamps:true});


const Conversation = mongoose.model('Conversation',conversatiionSchema);

module.exports = Conversation;