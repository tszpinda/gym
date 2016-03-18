import {Result} from '../result/result';
import {Workout} from '../workout/workout';
import {Exercise} from '../exercise/exercise';

var EXERCISES: Exercise[] = [
   {
      id: 1,
      name: "Squats",
      reps: [75, 80, 85, 90, 95]
   },{
      id: 2,
      name: "Bench Press",
      reps: [65, 75, 85, 95, 105]
   },{
      id: 3,
      name: "Deadlift",
      reps: [70, 80, 85, 95, 105]
   },{
      id: 4,
      name: "Barbell Row",
      reps: [50, 55, 60, 70, 80]
   },{
      id: 5,
      name: "Overhead Press",
      reps: [50, 55, 60, 70, 80]
   },{
      id: 6,
      name: "Pullups",
      reps: [50, 55, 60, 70, 80]
   },
]

var AVAILABLE_WORKOUTS:Workout[] = [
   {
      id: 1,
      name: "Day 1 (Mon)",
      excercises: [1, 2, 3, 4, 5]
   },
   {
      id: 2,
      name: "Day 2 (Wed)",
      excercises: [6, 2, 3, 4, 5]
   },
   {
      id: 3,
      name: "Day 3 (Fri)",
      excercises: [6, 2, 3, 4, 5]
   }
];
var COMPLETED_WORKOUTS:Result[] = [
   {
      id: 1,
      workoutId: 1,
      date: new Date(),
      userId: 234,
      exercises: [
         {
            exercise: EXERCISES[0],
            reps: [
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 4, weight: 75},
            ]
         },{
            exercise: EXERCISES[1],
            reps: [
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 4, weight: 95},
            ]
         },{
            exercise: EXERCISES[2],
            reps: [
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 4, weight: 15},
            ]
         }
      ]
   },{
      id: 2,
      workoutId: 2,
      date: new Date(),
      userId: 234,
      exercises: [
         {
            exercise: EXERCISES[3],
            reps: [
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 5, weight: 75},
               {count: 4, weight: 75},
            ]
         },{
            exercise: EXERCISES[4],
            reps: [
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 5, weight: 95},
               {count: 4, weight: 95},
            ]
         },{
            exercise: EXERCISES[5],
            reps: [
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 5, weight: 15},
               {count: 4, weight: 15},
            ]
         }
      ]
   }
];

var mockData = {
   exercises: EXERCISES,
   availableWorkouts: AVAILABLE_WORKOUTS,
   completedWorkouts: COMPLETED_WORKOUTS
};

export {mockData};
