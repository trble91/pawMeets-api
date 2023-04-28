import { ObjectId } from "bson";
import mongoose from "../db/connection.js";

const Schema = mongoose.Schema;

const DogSchema = new Schema({
    breed: {type: String},
    name: {type: String},
    age: {type: String},
    about: {type: String},
    gender: {type: String},
    personality: {type: [String]},
    image: {type: String},
    message: {type: [ObjectId]}
});

export default mongoose.model("dogs", DogSchema)

// // for message schema, 
// Message = new Schema({
//     // users: [objids that match with particular user that you are having the convo with ]
//     // messages: {type: [String]} // when you send a messag, send req (objID.message.push into that array)

// })