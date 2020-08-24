import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  AddressTabConfig } from "../shared/config/address.config";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent implements OnInit {

  tabData : any
  dataConfig : any = {}
  constructor() { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit(): void {
    this.tabData = AddressTabConfig;
    this.dataConfig = this.tabData[0]
  }
  tabChange (tab) {
    this.dataConfig = tab
  }

}
