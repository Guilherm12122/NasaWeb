import { ApodService } from './services/apod.service';
import { Component, OnInit } from '@angular/core';
import { Apod } from './models/apod';
import { Mars } from './models/mars';
import { MarsService } from './services/mars.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div *ngFor="let mar of mars" class="card-containe">
      <!-- {{mar.earth_date}}
      {{mar.img_src}}
      {{mar.rover}} -->
      <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{mar.rover}}</mat-card-title>
    <mat-card-subtitle>{{mar.earth_date}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src={{mar.img_src}} alt="Photo of a Shiba Inu">
</mat-card>
    </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
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
