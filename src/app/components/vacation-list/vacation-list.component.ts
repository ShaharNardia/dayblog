import { Component, OnInit } from '@angular/core';
import { Vacation } from '../../interfaces/vacation'
import { VacationService } from 'src/app/shared/vacation.service';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/shared/flight.service';


@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent implements OnInit {

  vacations: any[];// = [{ id: '', title: '' }];
  constructor(
    private vacationSrv: VacationService,
    private flightSrv: FlightService,
    // private placeSrv: PlacesService,
    private route: Router) { }

  getVacationList() {
    this.vacationSrv.getVacationsList().subscribe(querySnapshot => {
      let vacationList = [];
      querySnapshot.forEach(function (doc) {
        vacationList.push({ id: doc.id, title: doc.data().title });
      });
      this.vacations = vacationList;
    })
  }
  ngOnInit() {
    this.getVacationList();
  }

  newVacation() {
    this.route.navigate(['/vacation']);
  }

  delete(id) {
    this.vacationSrv.deleteVacation(id).then(data => {
      this.flightSrv.deleteFlightsVacation(id);
      this.getVacationList();
    });
  }
}
