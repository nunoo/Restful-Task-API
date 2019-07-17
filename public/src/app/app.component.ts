import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  title = 'Restful Tasks API';
  tasks = [];
  is_tasks = false;
  taskid = {};
  edit = false;
  task_info = {};
  editTask: any;

  ngOnInit() {
    this.newTask = { title: "", description: "" }
  }

  constructor(private _httpService: HttpService) {
  }

  onButtonClick() {
    console.log(`Click is working`);
    this.getTasks()
  }

  getTasks() {
    let Observable = this._httpService.getTasks();
    Observable.subscribe(data => {
      this.tasks = data.data
      console.log("Got our tasks!", data);
    })
  }

  getTasksById(id) {
    console.log('working')
    let observable = this._httpService.getTasksbById(id);
    observable.subscribe(data => {
      this.taskid = data.data;
      this.is_tasks = true
      console.log(this.taskid)
    })
  }


  addTask() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      this.newTask = { title: "", description: "" }
    })
    this.getTasks();
  }

  deleteTask(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      this.tasks = data.data
    })
    this.getTasks();
  }

  onEdit() {
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      this.getTasks();
      this.edit = false;
    })
  }

  showEditTask(task) {
    this.editTask = { title: task.title, description: task.description, id: task._id }
    this.edit = true;
  }


}
