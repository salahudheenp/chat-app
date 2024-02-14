import ChatModel from "../models/chatModel";

export const createChatModel  = async(req,res) => {
    const newChat  = new ChatModel({
        members :[req.body.senderId,req.body.receiverID] 
    })

    try {
        const result = await newChat.save();
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json(error)
    }
}



export const userChats = async (req,res) =>{
    try {
        const chat = await ChatModel.find({
            members:{$in:[req.params.userId]}
        }) 
    } catch (error) {
        res.status(500).json(error);
    }
}