import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {WorkoutService} from '../workout/workout-service';
import {Workout} from '../workout/workout';
import {WorkoutPage} from '../workout/workout-page';


@Page({
  templateUrl: 'build/pages/workout-list/workout-list-page.html'
})
export class WorkoutListPage implements OnInit {
  selectedItem: any;
  workouts: Array<Workout>;

  constructor(private nav:NavController, private workoutService: WorkoutService){}

  ngOnInit() {
     this.workoutService.getAvailableWorkouts().then(list => {
        this.workouts = list;
     });
  }

  openWorkout(workout:Workout) {
    this.nav.push(WorkoutPage, {workout: workout}) ;
  }

}
