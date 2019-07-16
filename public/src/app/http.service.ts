import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks')
  }

  getTasksbById(id){
    return this._http.get('/tasks/' + id)
  }

  addTask(newTask){
    return this._http.post('/tasks', newTask)
  }

  deleteTask(id){
    return this._http.delete('/tasks/' + id)
  }

  editTask(editTask){
    // console.log('im working service')
    // console.log(editTask)
    return this._http.put('/tasks/' + editTask.id, editTask)
  }
}