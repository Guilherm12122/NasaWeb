import { ApodService } from './services/apod.service';
import { Component, OnInit } from '@angular/core';
import { Apod } from './models/apod';
import { Mars } from './models/mars';
import { MarsService } from './services/mars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  apod = {} as Apod;
  apods: Apod[] = [];

  mar = {} as Mars
  mars: Mars[] = [];

  constructor(private apodservice: ApodService, private marservice: MarsService) {}

  ngOnInit() {
    this.getApods();
    this.getMars();
  }

  getMars() {
    this.marservice.getMars().subscribe((mars: Mars[]) => {
      this.mars = mars
    });
  }

  getApods() {
    this.apodservice.getApods().subscribe((apods: Apod[]) => {
      this.apods = apods
    });
  }
}
