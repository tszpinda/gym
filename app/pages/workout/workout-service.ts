import {Injectable} from 'angular2/core';
import {mockData} from '../mock/mock-data';
import {Workout} from '../workout/workout';
import {Result} from '../result/result';
import {ExerciseResult} from '../result/exercise-result';
import {RepResult} from '../result/rep-result';
import {Exercise} from '../exercise/exercise';


@Injectable()
export class WorkoutService {

   getAvailableWorkouts() {
      return new Promise<Workout[]>(resolve => resolve(mockData.availableWorkouts));
   }

   getEmptyResultForWorkout(workout:Workout) {
     return new Promise<Result>(resolve => {
       var loggedUserId = 23;

       var exercises: ExerciseResult[] = []

       for(var i = 0; i < mockData.exercises.length; i++) {
         var e:Exercise = mockData.exercises[i];
         if(workout.excercises.indexOf(e.id) < 0) {
            continue;
         }

         var repsList:RepResult[] = [];
         for(var j = 0; j < e.reps.length; j++){
           var rep:RepResult = {weight: e.reps[j], count: null};
           repsList.push(rep);
         }

         var exerciseResult:ExerciseResult = {reps: repsList, exercise: e};
         exercises.push(exerciseResult);
       }

       var emptyResult:Result = {id: 1, workoutId: workout.id, date: new Date(), userId: loggedUserId, exercises: exercises};
       resolve(emptyResult);
     });
   }
}
