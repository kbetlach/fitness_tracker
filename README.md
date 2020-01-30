# Fitness Tracker

## Introduction

This workout tracking application allows users to enter their cardio or resistance workouts, recording various aspects of the exercises. Users can give a name to the exercises performed, and with resistance workouts, record the weight, sets, reps and duration of the exercise. Cardio exercises take distance and duration inputs.

On the landing page, users can start a "new workout." This brings them to the exercise input page, where they can enter all relevant information. Once complete, users can "add exercise," which stores the information in a Mongo database. Workouts can be added on to existing workouts, and the statistics will be reflected on the home page, like the date, total duration, etc.

If a user clicks "complete workout," this clears the current workout. Similarly, if a user clicks "new workout" again on the landing page, the current workout is cleared and a new one takes its place. Previous workout statistics are still stored in the database, and are reflected in the stats dashboard.

In the stats dashboard, users can see charts and graphs reflecting their exercise history. The previous week will be displayed, with cardio exercises represnted in the left chart, and resistance on the right. The names of the exercises entered are listed below the graphs.

<img width="1421" alt="workout" src="https://user-images.githubusercontent.com/53587397/73475589-490c1b00-4356-11ea-85d2-684b5c9e4b49.png">

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Technologies Utilized

- MongoDB
- Mongoose schema
- Express
- HTML5/CSS/JavaScript
- Chart.js

## Launch

Here is the link to the deployed app on Heroku:

(https://fitness-tracker-kb.herokuapp.com/)

## Sources and Inspiration

This provided some much needed practice with Mongo and Mongoose schemas. It was my first major exposure to chart.js as well, which definitely added to the visual aspect of the app. 

My favorite part was figuring out the API routes. Relative to the rest of the app, it's fairly minimal code that makes everything work!

![code](https://user-images.githubusercontent.com/53587397/73475846-cafc4400-4356-11ea-8837-3721839b9b08.png)