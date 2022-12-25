// mongodb+srv://rahul9898:r1UKLTYWTiNas0Eb@cluster0.uako4kr.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://rahul9898:r1UKLTYWTiNas0Eb@cluster0.uako4kr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is Successfully Connected to MongoDB Database"); 
})

db.on("error", (err) => {
   console.log("Error: " + err);
})

module.exports = mongoose;