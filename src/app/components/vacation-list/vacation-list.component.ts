import { Component, OnInit } from '@angular/core';
import { Vacation } from '../../interfaces/vacation'
import { VacationService } from 'src/app/shared/vacation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent implements OnInit {

  vacations: any[];// = [{ id: '', title: '' }];
  constructor(private vacationSrv: VacationService, private route: Router) { }

  ngOnInit() {

    this.vacationSrv.getVacationsList().subscribe(querySnapshot => {
     // this.vacations = querySnapshot.docs;
      let vacationList = [];
      querySnapshot.forEach(function (doc) {
        vacationList.push({ id: doc.id, title: doc.data().title });
      });
      this.vacations = vacationList;
      console.log(this.vacations);
    })
  }
  newVacation() {
    this.route.navigate(['/vacation']);
  }

}
