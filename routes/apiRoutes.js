const Workout = require("../models/workout.js");

module.exports = function(app) {

  app.post("/api/workout", (req, res) => {
    body = req.body;
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workout/bulk", (req, res) => {

    console.log(req.body);

    Workout.insertMany(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workout", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};