const mongoose = require("mongoose"); // 1=> acquire mongoose

async function connectDB() {
  //2=> create a function to connect to the database

  await mongoose.connect(
    "mongodb+srv://yt:imN3KD9SJmLAeLjO@yt-complete-backend.iwgaygi.mongodb.net/halley",
  ); //3=> connect to the database (connectionString/databaseNamehalley)

  console.log("Database connected successfully"); //4=> log a message when the database is connected
}

module.exports = connectDB; //5=> export the function to be used in server.js
