import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ConsoleReporter } from 'jasmine';


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
  editTaskid: any;

  ngOnInit() {
    // this.getTasks();
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
    // this.task_info = this.tasks[taskIndex]
    // this.is_tasks = true
    // console.log(taskIndex)
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

  editTask(id) {
    let observable = this._httpService.editTask(id);
    observable.subscribe(data => {
      this.editTask = data.data 
      this.editTaskid = { title: "", description: "" }
      this.edit = true;
    })
  }
  
  showEdit(edit_Task){
    this.edit = true
    this.editTask = {'title': edit_Task.title, 'description': edit_Task.description}
  }

  // showEditForm(task_select){
  //   this.edit = true; 
  //   this.editTaskid = {'title': task_select.title, 'description': task_select.description, 'id': task_select._id}
  //   // console.log(this.editedTask)
  //   console.log("About to edit task")
  // }


  // showEditForm(task_select){
  //   this.edit = true; 
  //   this.editTaskid = {'title': task_select.title, 'description': task_select.description, 'id': task_select._id}
  //   // console.log(this.editedTask)
  //   console.log("About to edit task")
  // }
  // editTask(){
  //   let observable = this._httpService.editTask(this.editTask)
  //   observable.subscribe(data =>{
  //     console.log("Edited task and returned")
  //     //Reset Edited Task Obj
  //     this.editTaskid = {this: "", description: "", id: ""}
  //     this.edit = false;
      
  //   })
  // }
}
