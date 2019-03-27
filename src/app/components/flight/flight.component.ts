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

  submit() {
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
  resetFields() {
    this.flight = { vacationId: '', to: '', from: '', airport: '', notes: '', id: '', company: '', flightNumber: '' };
    this.flightId = '';
  }

  editFlight(flightId) {
    this.isEdit = true;
    this.flightId = flightId;
    this.flightSvc.getFlightsbyId(flightId).subscribe(data => {
      this.flight = <Flight>data.data();
      //console.log(data.data());
    })
  }

  goToAddLocation(){
    this.router.navigate(['/location',this.vacationId])
  }

  getFlightsList() {
    this.flightSvc.getFlightsByVacId(this.vacationId).get().subscribe(data => {
      console.log(data);
      let tempFlightArr = [];
      data.forEach(doc => {
        console.log(doc.data());
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
