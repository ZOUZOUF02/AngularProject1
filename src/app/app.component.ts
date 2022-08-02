import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularEX1';
  cars : carinfo[] = []
  constructor(private apiCaller : HttpClient){}
  ngOnInit()
  {
    this.GetCars()
  }
  GetCars()
  {
    this.apiCaller.get('http://localhost:3000/GetCar')
     .subscribe((json : any)=>{
      json.sheet1.forEach((element : any) => {
        var c = new carinfo()
        c.name = element.A
        c.price = element.B
        c.imgUrl = element.C
        this.cars.push(c)
      })});
      console.log(this.cars);
  }
}
export class carinfo{
  name : string = ''
  price : number = 0
  imgUrl : string = ''
}