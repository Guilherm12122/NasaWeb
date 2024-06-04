import { ApodService } from './services/apod.service';
import { Component, OnInit } from '@angular/core';
import { Apod } from './models/apod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  apod = {} as Apod;
  apods: Apod[] = [];

  constructor(private apodservice: ApodService) {}

  ngOnInit() {
    this.getApods();
  }

  getApods() {
    this.apodservice.getApods().subscribe((apods: Apod[]) => {
      this.apods = apods
    });
  }
}
