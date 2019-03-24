import { Component, OnInit } from '@angular/core';
import { Vacation } from '../../interfaces/vacation'

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent implements OnInit {

  vacations: Vacation[] = [];
  constructor() { }

  ngOnInit() {
  }

}
