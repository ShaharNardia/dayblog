import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  apikey = 'AIzaSyDkfnnIu4juiYqftVzL4lawbBoTvFuA7DY';
  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  autocomplete_API_GOOGLE(term: string, language?: string): Observable<any> {
    if (language === undefined || language === '') {
      language = 'en';
    }
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${this.apikey}&language=${language}&input=${term}`);
  }
  getPlaceDetailsById_API_GOOGLE(id: number): Observable<any> {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${this.apikey}`);
  }
  getPlacePhoto_API_GOOGLE(photoreference: number): Observable<any> {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&key=${this.apikey}`);
  }


  insertPlace(place) {
    return this.afs.collection('place').add(place);
  }

  getPlaceByVacationId(vacId) {
    return this.afs.collection('place', ref => ref.where('vacationId', '==', vacId)).get();
  }

  updatePlace(id, place) {
    return this.afs.collection('place').doc(id).set(place);
  }

  deletePlace(id){
    return this.afs.collection('place').doc(id).delete();
  }
}
