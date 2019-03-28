import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/shared/location.service';
import { VacationService } from 'src/app/shared/vacation.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private locationSrv: LocationService,
    private vacatSvc: VacationService) { }
  vacationId = '';
  vacationTitle = '';
  locations: any[] = [];
  location: any = {};
  locationId = '';
  isEdit = false;

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.vacatSvc.getVacationById(params.id).subscribe(data => {
        this.vacationId = params.id;
        this.getVacationLocations();
        this.vacationTitle = `נקודות עניין עבור חופשה - ${data.data().title}`;
      })
    })
  }

  submit() {
    console.log(this.location);

    this.location.vacationId = this.vacationId;

    if (!this.isEdit) {
      this.locationSrv.insertLocation(this.location).then(data => {
        this.getVacationLocations();
      });
    } else {
      this.locationSrv.updateLocation(this.locationId, this.location).then(data => {
        this.getVacationLocations();
      });
    }
  }
  resetFields() {
    this.location = {};
    this.locationId = '';
    this.isEdit = false;
  }
  newNotEdit() {
    this.resetFields();
    
  }
  getVacationLocations() {
    this.locationSrv.getLocationByVacationId(this.vacationId).subscribe(data => {
      const tempArr = [];
      data.forEach(doc => {
        const obj = { id: doc.id, ...doc.data() };
        tempArr.push(obj);
      });
      this.locations.length = 0;
      this.locations = tempArr;
    });
    this.resetFields();
  }

  editLocation(locationId) {
    this.isEdit = true;
    this.locationId = locationId;
    this.locationSrv.getLocationById(locationId).subscribe(data => {
      this.location = <Location>data.data();
    })
  }
}
