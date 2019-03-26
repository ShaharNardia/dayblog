import { Component, OnInit, Input } from '@angular/core';
import { Vacation } from 'src/app/interfaces/vacation';
import { VacationService } from 'src/app/shared/vacation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  @Input()
  vacationId

  vacId;
  isNew: boolean = false;
  isEditMode: boolean = false;
  mydate = new Date(Date.now());
  //vacation: Vacation = { toDo: [], title: '', flights: [], id: '', userId: [], station: [], startDate: this.mydate, endDate: this.mydate };
  vacation: any = { title: '', userId: '', startDate: this.mydate, endDate: this.mydate };
  flightShow: boolean = false;
  stationShow: boolean = false;
  constructor(private vacationSvc: VacationService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.vacId = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.vacId) {
      this.vacationSvc.getVacationById(this.vacId).subscribe(data => {
        this.vacation = data.data();
        //this.vacation.endDate = this.vacation.endDate.toDate();
        //this.vacation.startDate = this.vacation.startDate.toDate();
      });
    }
    else {
      this.isEditMode = true;
      this.isNew = true;
    }
    console.log(this.isNew);
  }

  submit() {
    this.vacationSvc.insertVacation(this.vacation);
  }

}
