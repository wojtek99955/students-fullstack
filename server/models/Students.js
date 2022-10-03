const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StudentModel = mongoose.model("student-data", StudentSchema);
module.exports = StudentModel;
