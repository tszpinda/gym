import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {WorkoutService} from '../workout/workout-service';
import {Workout} from '../workout/workout';
import {Result} from '../result/result';

@Page({
  templateUrl: 'build/pages/workout/workout-page.html'
})
export class WorkoutPage implements OnInit{
  workout:Workout;
  result:Result;
  
  constructor(private nav:NavController, private navParams:NavParams,private workoutService:WorkoutService){
    this.workout = navParams.get('workout');
  }

  ngOnInit() {
    this.workoutService.getEmptyResultForWorkout(this.workout).then(emptyResult => {
      this.result = emptyResult;
    })
  }
  goBack() {
      this.nav.pop();
   }
}
