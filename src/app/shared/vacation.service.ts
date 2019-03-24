import { Injectable } from '@angular/core';
import { Vacation } from '../interfaces/vacation';
import { Flight } from '../interfaces/flight';
import { toDate } from '@angular/common/src/i18n/format_date';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  dateString = '1968-11-16T00:00:00';
  newDate = new Date(this.dateString);
  vacations: Vacation[] = [
    {
      id: '12',
      userId: ['0'],
      title: 'יום הולדת 40 של באב ובאבו',
      startDate: this.newDate,
      endDate: this.newDate,
      flights: [{
        id: '1',
        flightNumber: '1ABCDE',
        from: 'israel',
        to: 'Boston',
        company: 'AIR CANADA',
        airport: 'TLV',
        departureDate: this.newDate,
        notes: 'צריך להגיע 3 שעות לפני הזמן לטרמינל 2',
        todo: [{
          userIncharge: ['0', '1'], //userId
          title: 'לארוז כריכים',
          content: 'אני אוהב עם עגבניה',
          done: false
        }]
      },
      {
        id: '2',
        flightNumber: '2ABCDE',
        from: 'Boston',
        to: 'NY',
        company: 'AIR CANADA',
        airport: 'Boston airport',
        departureDate: this.newDate,
        arrivalDate: this.newDate,
        notes: 'אנחנו יוצאים לטיסה משער A3',
        todo: [{
          userIncharge: ['0'], //userId
          title: 'להוריד סרטים מאבירם ללפטופ',
          content: 'להוריד נרקוס, שובר שורות וכו',
          done: false
        }]
      }],
      station: [
        {
          id: '1',
          title: 'בוסטון',
          startDate: this.newDate,
          endDate: this.newDate,
          toDo: [{ userIncharge: ['0'], title: 'to do title for this flight', content: 'myu new to do', done: false },
          { userIncharge: ['1'], title: 'to do title for this flight', content: 'my new to do', done: true }],
          location: [{
            id: 'locationId',
            name: 'location name',
            myGrade: 5,
            type: 'location type',
            notes: 'location notes',
            link: 'location link',
            visited: false,
            startDate: this.newDate,
            endDate: this.newDate
          }]
        },
        {
          id: '2',
          title: 'ניו יורק',
          startDate: this.newDate,
          endDate: this.newDate,
          toDo: [{ userIncharge: ['0'], title: 'to do title for this flight', content: 'myu new to do', done: false },
          { userIncharge: ['1'], title: 'to do title for this flight', content: 'my new to do', done: true }],
          location: [{
            id: 'locationId',
            name: 'location name',
            myGrade: 5,
            type: 'location type',
            notes: 'location notes',
            link: 'location link',
            visited: false,
            startDate: this.newDate,
            endDate: this.newDate
          }]
        },
        {
          id: '3',
          title: 'לאס-וגאס',
          startDate: this.newDate,
          endDate: this.newDate,
          toDo: [{ userIncharge: ['0'], title: 'to do title for this flight', content: 'myu new to do', done: false },
          { userIncharge: ['1'], title: 'to do title for this flight', content: 'my new to do', done: true }],
          location: [{
            id: 'locationId',
            name: 'location name',
            myGrade: 5,
            type: 'location type',
            notes: 'location notes',
            link: 'location link',
            visited: false,
            startDate: this.newDate,
            endDate: this.newDate
          }]
        }
      ],
      toDo: [
        { done: false, content: 'content of vacation1 to do', title: 'title of vac1 to do', userIncharge: ['1'] },
        { done: true, content: 'content of vacation2 to do', title: 'title of vac2 to do', userIncharge: ['1', '2'] }
      ]
    }];

  constructor() { }

  getVacationsList(): Vacation[] {
    return this.vacations;
  }

  getVacationById(VacationId: string): Vacation {
    return this.vacations.filter(x => x.id === VacationId)[0];
  }
}
