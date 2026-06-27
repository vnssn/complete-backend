const express = require("express");
const app = express();

// 5 => to access the data sent from the frontend we need to use middleware called express.json(). express data nhi padh sakta express ko data read krne ke liye yeh middleware lagta hai
app.use(express.json());

/*
  note = {
    title: 'My first note',
    description: 'This is my first note',
    id: 1
  }
*/

const notes = []; // 1 => creating an array to store notes

//-----------------------------------------------------------------

//2 => creating api named "/notes" to get all notes
app.post("/notes", (req, res) => {
  
  //3 => server pe data aaya hai usse access karne ke liye hum req.body ka use karenge
  // 4 => backend pe data bhejte wakt api banate time ek alag application lagta hai called postman jisme hum data bhejte hai aur server pe data aata hai usse access karne ke liye hum req.body ka use karenge

  const note = req.body;

  notes.push(note); // 6 => pushing the note to the array

  res.status(201).json({
    message: "Note added successfully",
  }); // 7 => sending response to the client
});

//-----------------------------------------------------------------
// get api to get all notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  }); // 8 => sending response to the client
});

//-----------------------------------------------------------------

// delete /notes/index api

app.delete("/notes/:index", (req, res) => { // colon make a variable in the url so that we can access it in the request params
  const index = req.params.index; // 9 => getting the index from the request params

  delete notes[index]

  res.status(200).json({
    message: "Note deleted successfully",
  }); // 10 => sending response to the client
});

//---------------------------patch api-----------------------------------------

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description; // 11 => getting the description from the request body

  notes[index].description = description; // 12 => updating the description of the note at the given index

  res.status(200).json({
    message: "Note updated successfully",
  }); // 13 => sending response to the client
});


module.exports = app;
