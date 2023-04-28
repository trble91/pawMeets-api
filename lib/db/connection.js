import mongoose from "mongoose";

mongoose.Promise = Promise;

const url = process.env.MONGO_URL || "mongodb+srv://admin:12345@cluster0.fhunmju.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(url , { useNewUrlParser: true })
  .then(instance =>
    console.log("We're connected!!")
  )
  .catch(err => console.log("Connection Failed.", err));

export default mongoose.connection;