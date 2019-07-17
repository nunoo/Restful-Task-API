import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() taskToShow: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
