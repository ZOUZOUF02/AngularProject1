import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { GetCarsComponent } from './get-cars/get-cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { pricetag } from './pipes/pipes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetCarsComponent,
    AddCarComponent,
    pricetag
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
