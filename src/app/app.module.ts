import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MyboolPipe } from './pipes/mybool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VacationComponent,
    VacationListComponent,
    HomeComponent,
    MyboolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
