import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  // 1Km/h = 1000 / 60 = 16 m / Min
  speedKmph = (speed:number):number =>{ return speed * 1000};
  distanceKm = (dist:number):number =>{return dist * 1000};
  getMperMin = (speed:number):number =>{
    return speed / 60
  }

  timeTravel = (distance:number,speed:number):number =>{
    let NpMin = this.getMperMin(this.speedKmph(speed))
    return Math.floor(this.distanceKm(distance) / NpMin) + (this.distanceKm(distance) / NpMin) % 0.60
   
  }
  constructor() { }

  ngOnInit(): void {
    let dst = 320; //km
    let speed = 200; //Kmph
    console.log("Distance : "+dst + " Km = " + this.distanceKm(dst) + "m");
    console.log("Speed : "+speed +" Km/h = " + +this.speedKmph(speed) + " meter/h");
    console.log("Travel Time : "+this.timeTravel(dst,speed).toFixed(2) + " Min.");

  }

  


  



}
