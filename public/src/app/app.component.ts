import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  tasks = [];
  tasksid = {};


  constructor(private _httpService: HttpService) {
    // this.getTasks();
   }
  getTasks() {
    let taskObservable = this._httpService.getTasks();
    taskObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      console.log(data)
      this.tasks = data.data;
    })
  }

  getTasksById() {
    let taskObservable = this._httpService.getTasks();
    taskObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      console.log(data)
      this.tasksid = data.data;
    })
  }
  onButtonClick(){
    // console.log(`Click is working`);
    this.getTasks()
  }
  onButtonClick2(){
    console.log(`Click is working`);
    this.getTasksById()
  }
}
