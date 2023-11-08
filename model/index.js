const mongoose = require('mongoose');

const DB_URL = "mongodb://0.0.0.0:27017/users";

mongoose.connect(DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("DB Connected successfully");
});
db.on("error", console.error.bind(console, "connection error: "));