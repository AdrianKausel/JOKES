const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Jokes_Api", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Connected to DB!"))
	.catch(err => console.log("Error, not connected", err));