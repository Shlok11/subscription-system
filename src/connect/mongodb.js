const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/users";
mongoose.connect(
  db,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (error) => {
    if(error) console.log(error)
  }
);
