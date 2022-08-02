import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-cars',
  templateUrl: './get-cars.component.html',
  styleUrls: ['./get-cars.component.css']
})
export class GetCarsComponent implements OnInit {
  @Input() CarName : string = ''
  @Input() CarPrice : number = 0
  @Input() CarImg : string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
