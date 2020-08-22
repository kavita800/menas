import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent implements OnInit {

  constructor() { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit(): void {
  }

}
