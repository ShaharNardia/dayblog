import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/shared/location.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private placeSrv: PlacesService
  ) { }
  vacationId: string = '';
  places: any[] = [];
  place: any = {};
  placeId: string = '';
  isEdit: boolean = false;

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.vacationId = parameters.id;
    })
  }

  submit(place) {
    if (!this.isEdit) {
      this.placeSrv.insertPlace(place).then(data => {

      });
    }
    else {
      this.placeSrv.updatePlace(this.placeId, place).then(data => {

      });
    }
  }
  resetFields() {
    this.place = {};
  }

  getVacationPlaces() {
    this.placeSrv.getPlaceByVacationId(this.vacationId).subscribe(data => {
      let tempArr = [];
      data.forEach(doc => {
        let obj = { id: doc.id, ...doc.data() };
        tempArr.push(obj);
      })
      this.places.length = 0;
      this.places = tempArr;
    });

  }

}
