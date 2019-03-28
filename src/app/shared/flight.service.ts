import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private fs: AngularFirestore) { }

  getFlightsbyId(id: string) {
    return this.fs.collection('flight').doc(id).get();
  }
  getFlightsByVacId(id: string) {
    return this.fs.collection('flight', ref => ref.where('vacationId', '==', id).orderBy('departureDate', 'asc'));
  }

  insertFlight(flight) {
    return this.fs.collection('flight').add(flight);
  }

  updateFlight(flightId, flight) {
    return this.fs.collection('flight').doc(flightId).set(flight);
  }

  deleteFlight(flightId) {
    return this.fs.collection('flight').doc(flightId).delete();
  }

  deleteFlightsVacation(vacId) {
    return this.fs.collection('flight', ref => ref.where('vacationId', '==', vacId)).get().subscribe(data => {
      data.forEach(doc => {
        this.fs.collection('flight').doc(doc.id).delete();
      })
    });
  }

}
