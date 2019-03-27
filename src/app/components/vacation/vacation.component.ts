import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Vacation } from 'src/app/interfaces/vacation';
import { VacationService } from 'src/app/shared/vacation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/shared/flight.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  vacId;
  isNew: boolean = false;
  isEditMode: boolean = false;
  mydate = new Date(Date.now());
  //vacation: Vacation = { toDo: [], title: '', flights: [], id: '', userId: [], station: [], startDate: this.mydate, endDate: this.mydate };
  vacation: any = { title: '', userId: '', startDate: this.mydate, endDate: this.mydate };
  flights: Flight[] = [];
  flightShow: boolean = false;
  stationShow: boolean = false;
  constructor(private vacationSvc: VacationService, private flightSvc: FlightService, private activatedRoute: ActivatedRoute, private route: Router, private zone: NgZone) {
  }


  ngOnInit() {
    this.vacId = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.vacId) {
      this.vacationSvc.getVacationById(this.vacId).subscribe(data => {
        this.vacation = data.data();
        this.flightSvc.getFlightsByVacId(this.vacId).get().subscribe(data => {
          let tempArr = [];
          data.forEach(doc => {
            tempArr.push(doc.data());
          })
          this.flights = tempArr;
        });
      });
    }
    else {
      this.isEditMode = true;
      this.isNew = true;
    }

  }

  submit() {
    if (this.isNew) {
      this.vacationSvc.insertVacation(this.vacation).then(docRef => {
        this.zone.run(() => this.route.navigate(['/flight', docRef.id]));
      });
    }
    else {
      this.vacationSvc.updateVacation(this.vacId, this.vacation).then(docRef => {
        this.goToAddFlights();
      });
    }
  }

  goToAddFlights() {
    this.zone.run(() => this.route.navigate(['/flight', this.vacId]));
  }

  goToAddLocation() {
    this.zone.run(() => this.route.navigate(['/location', this.vacId]));
  }
}
