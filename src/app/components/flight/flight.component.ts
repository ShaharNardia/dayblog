import { Component, OnInit } from '@angular/core';
import { VacationService } from 'src/app/shared/vacation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/shared/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  vacationTitle: string = '';
  vacationId: string = '';
  formIsValid: boolean = true;
  flightId: string = '';
  flights: Flight[] = [];// [{ to: '', from: '', airport: '', notes: '', id: '', company: '', flightNumber: '' }];
  flight: Flight = { vacationId: '', to: '', from: '', airport: '', notes: '', id: '', company: '', flightNumber: '' };
  isEdit: boolean = false;

  constructor(private vacatSvc: VacationService, private flightSvc: FlightService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vacatSvc.getVacationById(params.id).subscribe(data => {
        this.vacationId = params.id;
        this.getFlightsList();
        this.vacationTitle = `טיסות עבור חופשה - ${data.data().title}`;
      })
    })
  }

  checkIfValid(): boolean {
    if (
      this.flight.departureDate !== undefined &&
      this.flight.airport !== '' &&
      this.flight.company !== '' &&
      this.flight.from !== '' &&
      this.flight.to !== '' &&
      this.flight.flightNumber !== ''
    ) {
      this.formIsValid = true;
    }
    else {
      this.formIsValid = false;
    }

    return this.formIsValid;
  }
  submit() {
    if (this.checkIfValid()) {
      this.flight.vacationId = this.vacationId;

      if (!this.isEdit) {
        this.flightSvc.insertFlight(this.flight).then(data => {
          this.getFlightsList();
        });
      }
      else {
        this.flightSvc.updateFlight(this.flightId, this.flight).then(data => {
          this.getFlightsList();
        });
      }

      this.resetFields();
    }
    else {

    }
  }
  resetFields() {
    this.flight = { vacationId: '', to: '', from: '', airport: '', notes: '', id: '', company: '', flightNumber: '' };
    this.flightId = '';
    this.isEdit = false;
  }

  editFlight(flightId) {
    this.isEdit = true;
    this.flightId = flightId;
    this.flightSvc.getFlightsbyId(flightId).subscribe(data => {
      this.flight = <Flight>data.data();
    })
  }

  goToAddLocation() {
    this.router.navigate(['/location', this.vacationId])
  }

  getFlightsList() {
    this.flightSvc.getFlightsByVacId(this.vacationId).get().subscribe(data => {
      let tempFlightArr = [];
      data.forEach(doc => {
        let obj = { ...doc.data(), id: doc.id };
        tempFlightArr.push(obj);
      })
      this.flights.length = 0;
      this.flights.push(...tempFlightArr);
    });
  }

  newNotEdit() {
    this.resetFields();
    this.isEdit = false;
  }
}
