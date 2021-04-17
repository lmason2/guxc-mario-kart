import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    times: [{
        playerName: String,
        time: Number,
        character: String
    }]
});

const Courses = mongoose.model("Courses", courseSchema);

export default Courses;