import CourseTimes from "../models/times.js";

export const getCourseTimes = async (req, res) => {
    try {
        const courseTimes = await CourseTimes.find();

        res.status(200).json(courseTimes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createTime = async (req, res) => {
    const time = req.body;

    const query = { "name" : time.course }
    const projection = { "times": 1}
    CourseTimes.findOne(query, projection).then(async result => {
        if(result) {
            let newPlayerOnCourse = true;
            const times = result.times
            times.map(playerTime => {
                if (playerTime.playerName === time.name) {
                    newPlayerOnCourse = false
                    const decimalTime = parseFloat(time.time);
                    if (playerTime.time > decimalTime) {
                        playerTime.time = time.time;
                        const index = times.indexOf(playerTime);
                        times[index] = playerTime;
                        console.log(times);
                        const update = {
                            "$set": {
                              "times": times,
                            }
                        };
                        const options = { returnNewDocument: true };
                        CourseTimes.findOneAndUpdate(query, update, options)
                        .then(updatedDocument => {
                            if(updatedDocument) {
                            console.log(`Successfully updated document: ${updatedDocument}.`)
                            } else {
                            console.log("No document matches the provided query.")
                            }
                        })
                        .catch(err => console.error(`Failed to find and update document: ${err}`))
                    }
                }
            })
            if (newPlayerOnCourse) {
                const newTimeObject = {playerName: time.name, time: time.time, character: time.character};
                times.push(newTimeObject);
                const update = {
                    "$set": {
                      "times": times,
                    }
                };
                const options = { returnNewDocument: true };
                CourseTimes.findOneAndUpdate(query, update, options)
                .then(updatedDocument => {
                    if(updatedDocument) {
                    console.log(`Successfully updated document: ${updatedDocument}.`)
                    } else {
                    console.log("No document matches the provided query.")
                    }
                })
                .catch(err => console.error(`Failed to find and update document: ${err}`))
            }
        } 
        else {
            try {
                const newCourseTime = new CourseTimes({ name: time.course, times: [{playerName: time.name, time: time.time, character: time.character}]});
                await newCourseTime.save();

            res.status(201).json(newCourseTime );
            } catch (error) {
                res.status(409).json({ message: error.message });
            }
        }
    })
}