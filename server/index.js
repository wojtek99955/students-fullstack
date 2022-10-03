require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentModel = require("./models/Students");
const cors = require("cors");

app.use(express.json());
app.use(cors());

console.log(process.env.MONGODB_KEY);
mongoose.connect(process.env.MONGODB_KEY);

app.get("/getStudents", (req, res) => {
  StudentModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createStudent", async (req, res) => {
  const student = req.body;
  const newStudent = new StudentModel(student);
  await newStudent.save();
  res.json(student);
});

app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY");
});
