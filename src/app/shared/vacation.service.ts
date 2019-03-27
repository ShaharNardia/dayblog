import { Injectable } from '@angular/core';
import { Vacation } from '../interfaces/vacation';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  dateString = '1968-11-16';
  newDate = new Date(this.dateString);
  vacations: Vacation[] = [];

  constructor(private firestore: AngularFirestore) { }

  getVacationsList() {
    return this.firestore.collection("vacation").get();
  }

  getVacationById(VacationId: string) {
    return this.firestore.collection("vacation").doc(VacationId).get(); //() .filter(x => x.id === VacationId)[0];
  }



  insertVacation(vacation) {
    return this.firestore.collection('vacation').add(vacation);
  }


  updateVacation(id, vacation) {
    return this.firestore.collection('vacation').doc(id).set(vacation);
  }

  deleteVacation(id) {
    return this.firestore.collection('vacation').doc(id).delete();
  }
}
