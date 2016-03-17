import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {WorkoutService} from '../workout/workout-service';
import {Workout} from '../workout/workout';


@Page({
  templateUrl: 'build/pages/workout-list/workout-list-page.html'
})
export class WorkoutListPage implements OnInit {
  selectedItem: any;
  workouts: Array<Workout>;

  constructor(private nav:NavController, private workoutService: WorkoutService){}

  ngOnInit() {
     this.workoutService.getAvailableWorkouts().then(list => {
        this.workouts = list
     });
  }


}
