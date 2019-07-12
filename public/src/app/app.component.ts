import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  tasks = ["Learn Angular - Understand services", "Manipulate the DOM - User the 'for of' loop", "Bind Events - Parentheses indicate events"];


  constructor(private _httpService: HttpService) { }
  getTasks() {
    let taskObservable = this._httpService.getTasks();
    taskObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['tasks']
    }
    )
  }
}
