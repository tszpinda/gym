import {ExerciseResult} from './exercise-result';

export interface Result {
   id: number,
   workoutId: number,
   date: Date,
   userId: number,
   exercises: ExerciseResult[]
}
