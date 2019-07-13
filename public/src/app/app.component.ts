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
  is_tasks = false;
  task_info = {};


  constructor(private _httpService: HttpService) {
    // this.getTasks();
   }
  getTasks() {
    let taskObservable = this._httpService.getTasks();
    taskObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      console.log(data)
      this.tasks = data.data
    })
  }

  getTasksById(task) {
    console.log('showing one task')
    var tasks_id = task._id
    let taskObservable = this._httpService.getTasks();
    taskObservable.subscribe(data => {
      console.log("Got one tasks!", data);
      console.log(data)
      this.task_info = data.data
      this.is_tasks = true
    })
  }

  onButtonClick(){
    console.log(`Click is working`);
    this.getTasks()
  }
 
}
