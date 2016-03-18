import {RepResult} from './rep-result'
import {Exercise} from '../exercise/exercise';

export interface ExerciseResult {
   exercise: Exercise
   reps: RepResult[]
}
