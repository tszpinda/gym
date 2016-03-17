import {Injectable} from 'angular2/core';
import {mockData} from '../mock/mock-data';
import {Workout} from '../workout/workout';

@Injectable()
export class WorkoutService {

   getAvailableWorkouts() {
      return new Promise<Workout[]>(resolve => resolve(mockData.availableWorkouts));
   }

}
