const mongoose = require("mongoose"); // 7 => acquire mongoose again

const noteSchema = new mongoose.Schema({
  // 8 => create a schema for the note model
  //yeh notemodel banana hai bas iske bina nhi ho paayega

  // write data types for the fields in the schema
  title: String,
  description: String,
  //age: Number,
  //dob: Date
});

const noteModel = mongoose.model("Note", noteSchema); // 9 => to avoid writng the schema again and again, we create a model for the schema

module.exports = noteModel; // 10 => export the model to be used in other files
