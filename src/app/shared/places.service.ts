import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  apikey='AIzaSyDkfnnIu4juiYqftVzL4lawbBoTvFuA7DY';
  constructor(private http: HttpClient) { }

  autocomplete(term: string, language?: string) : Observable<any>{
    if (language === undefined || language === '') {
      language = 'en';
    }
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${this.apikey}&language=${language}&input=${term}`);
  }
  getPlaceDetailsById(id: number) : Observable<any>{
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${this.apikey}`);
  }
  getPlacePhoto(photoreference: number): Observable<any>{
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&key=${this.apikey}`);
  }

}
