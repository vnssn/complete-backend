const mongoose = require('mongoose');

async function connectDB() {

  await mongoose.connect("mongodb+srv://yt:imN3KD9SJmLAeLjO@yt-complete-backend.iwgaygi.mongodb.net/project1")

  console.log("MongoDB connected");

}

module.exports = connectDB;