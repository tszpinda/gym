import {Page, NavController, NavParams, Alert} from 'ionic-angular';
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

  initAndCountDown(rep) {
    if(rep.count === null) {
      rep.count = 5;
    }else if(rep.count === 0){
      rep.count = 5;
    }else{
      rep.count--;
    }
  }

  goBack() {
      this.nav.pop();
   }

  testCheckboxOpen: boolean;
  isEditMode: false;

  toggleEdit() {
    console.log(this.isEditMode);
    this.isEditMode = !this.isEditMode;
  }

  doCheckbox(rep) {
    var currentWeight = rep.weight;
    let alert = Alert.create();
    alert.setTitle('Select weight');

    for (var a = currentWeight + 20; a > 0; a--) {

      alert.addInput({
        type: 'radio',
        label: a,
        value: a,
        checked: a == currentWeight ? true : false
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        rep.weight = data;
      }
    });

    this.nav.present(alert).then(() => {
      this.testCheckboxOpen = true;
    });
  }

}
