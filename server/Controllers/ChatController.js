import ChatModel from "../models/chatModel";

export const createChatModel  = async(req,res) => {
    const newChat  = new ChatModel({
        members :[req.body.senderId,req.body.receiverID] 
    })
}