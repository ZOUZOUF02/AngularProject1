import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { carinfo } from '../app.component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
 @Input() CarName : string = ''
 @Input() CarPrice : number = 0
 @Input() CarImgUrl : string = ''
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  AddCar()
  {
    fetch('http://localhost:3000/AddCar', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
              {
                "A": this.CarName,
                "B": this.CarPrice.toString(),
                "C": this.CarImgUrl
              }
            )
      });
      console.log(this.CarName)
  }
}
