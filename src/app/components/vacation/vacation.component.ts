import { Component, OnInit, Input } from '@angular/core';
import { Vacation } from 'src/app/interfaces/vacation';
import { VacationService } from 'src/app/shared/vacation.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  @Input()
  vacationId

  vacation: Vacation;
  flightShow: boolean = false;
  stationShow: boolean = false;
  constructor(private vacationSvc: VacationService) { }


  ngOnInit() {
    this.vacation = this.vacationSvc.getVacationById('12')
    console.log(this.vacation);
  }

}
