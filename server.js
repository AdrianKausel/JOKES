const express = require("express");
const app = express();

require("./Config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./Routes/joke.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is ready on port 8000!"));