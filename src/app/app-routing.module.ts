import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { FlightComponent } from './components/flight/flight.component';
import { LocationComponent } from './components/location/location.component';
import { StationComponent } from './components/station/station.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'vacation/:id', component: VacationComponent },

  { path: 'flight', component: FlightComponent },
  { path: 'flight/:id', component: FlightComponent },

  { path: 'location', component: LocationComponent },
  { path: 'location/:id', component: LocationComponent },

  { path: 'station', component: StationComponent },
  { path: 'station/:id', component: StationComponent },

  { path: 'todo', component: TodoComponent },
  { path: 'todo/:id', component: TodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
