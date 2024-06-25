// const Conversation = require('../models/converstionModel');
// const Message = require("../models/messageModel");

// const sendMessage = async(req,res)=>{
//     try {
//         const {message} = req.body;
//         const {id: receiverId} = req.params;
//         const senderId  = req.user._id

//         let conversation = await Conversation.findOne({
//             participants: {$all:senderId,receiverId}
//         })

//         if (!conversation){
//             conversation = await Conversation.create({
//                 participants:[senderId,receiverId]
//             });
//         };

//         const newMessage = new Message({
//             senderId,
//             receiverId,
//             message
//         });

//         if (newMessage){
//             conversation.messages.push(newMessage._id);
//         };

//         // await conversation.save();
//         // await newMessage.save();
        
//         //  this will run parallel
//         await Promise.all([conversation.save(),newMessage.save()]);

//         res.status(201).json({newMessage});
        
//     } catch (error) {
//         console.log('Error in sendingMessage Controller:',error,message)
//         res.status(500).json({error:"Internal server error"});
//     }
// }

// module.exports = sendMessage;

const Conversation = require('../models/converstionModel');
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Find existing conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] } // Fix: use an array for $all
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        // Create a new message document
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // If the message is created successfully, add its ID to the conversation's messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // Save the conversation and the new message concurrently
        await Promise.all([conversation.save(), newMessage.save()]);

        // Send the new message in the response
        res.status(201).json({ newMessage });
    } catch (error) {
        console.log('Error in sendMessage Controller:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getMessages = async(req,res)=>{
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChatId]}
        }).populate('messages'); // NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation) res.status(200).json([]);

        const messages = conversation.messages;

        const onlyMessages = messages.map(item => item.message);

        res.status(200).json(onlyMessages)


    } catch (error) {
        console.log('Error in getMessage Controller:', error.message);
        res.status(500).json({ error: "Internal server error" });
    };
};

module.exports = {sendMessage,getMessages};


