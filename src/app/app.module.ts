import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { LocationComponent } from './components/location/location.component';
import { FlightComponent } from './components/flight/flight.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyboolPipe } from './pipes/mybool.pipe';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { LocationService } from './shared/location.service';
import { FlightService } from './shared/flight.service';
import { VacationService } from './shared/vacation.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    VacationComponent,
    VacationListComponent,
    HomeComponent,
    MyboolPipe,
    FlightComponent,
    LocationComponent,
    TodoComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFirestoreModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [LocationService, FlightService, VacationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
