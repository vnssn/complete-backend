const express = require("express");
const noteModel = require("./models/note.model"); // 11 => acquire the note model to be used in the routes
const app = express();
app.use(express.json()); // 12 => to parse the incoming request body as JSON

/* note = {title, description} */

/*

  POST /notes => create a new note
  GET /notes => get all notes
  PATCH /notes/:id => update a note by id
  DELETE /notes/:id => delete a note by id

 */

app.post("/notes", async (req, res) => {
  // 13 => create a route to create a new note

  const data = req.body; // 14 => get the data from the request body
  await noteModel.create({
    // 15 => create a new note using the note model
    title: data.title,
    description: data.description,
  });

  res.status(201).json({ message: "Note created successfully" }); // 16 => send a response back to the client
});

app.get("/notes", async (req, res) => {
  // 17 => create a route to get all notes

  const notes = await noteModel.find(); // 18 => .find()get all notes from the database using the note model and store them in notes array output of find is always an array find=> output will be [] or [{}]

  // const notes = await noteModel.findOne({
  //   title: "test_title1" // 18 => .findOne()get one note from the database using the note model and store it in notes array output of findOne is always an object
  // findOne() => output will be {}(object) or null
  // })

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  }); // 19 => send a response back to the client with the notes array
});

app.delete("/notes/:id", async (req, res) => {
  // 20 => create a route to delete a note by id

  const id = req.params.id; // 21 => get the id from the request params
  await noteModel.findByIdAndDelete({
    _id: id, // 22 => delete the note from the database using the note model
  });

  res.status(200).json({ message: "Note deleted successfully" }); // 23 => send a response back to the client
});

app.patch("/notes/:id", async (req, res) => {
  // 24 => create a route to update a note by id

  const id = req.params.id; // 25 => get the id from the request params
  const description = req.body.description; // 26 => get the description from the request body

  await noteModel.findOneAndUpdate(
    {
      // 27=> it requires 2 arguments, first is the filter and second is the update
      _id: id, // 27 => filter the note by id
    },
    { description: description }, // 28 => update the description of the note
  );
  res.status(200).json({ message: "Note updated successfully" }); // 29 => send a response back to the client
});

module.exports = app;
