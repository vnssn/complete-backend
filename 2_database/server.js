const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB(); //6=> connect to the database

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//I => app.js = create the server
//II => server.js = start the server
//III => connect to the database
