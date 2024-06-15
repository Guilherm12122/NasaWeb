import { ApodService } from './services/apod.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Apod } from './models/apod';
import { Mars } from './models/mars';
import { MarsService } from './services/mars.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    AstroWeb
  </mat-toolbar>
  <div class="conteudo">
  <mat-sidenav-container>
    <mat-sidenav class="mat-elevation-z8">
      <button mat-button class="menu-button">
        <mat-icon class="marte-icon">home</mat-icon>
        <span class="marte-span">Marte</span>
      </button>
      <button mat-button class="menu-button">
        <mat-icon class="astro-icon">home</mat-icon>
        <span class="astro-span">Astros</span>
      </button>
    </mat-sidenav>
  </mat-sidenav-container>
  <!-- <app-btmars (onPlusClick)="toggleStepper = !toggleStepper"></app-btmars> -->
  <div class="container">
    <div *ngFor="let mar of mars" class="card-containe">
      <!-- {{mar.earth_date}}
      {{mar.img_src}}
      {{mar.rover}} -->
      <mat-card class="example-card" *ngIf="toggleStepper">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{mar.rover}}</mat-card-title>
    <mat-card-subtitle>{{mar.earth_date}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src={{mar.img_src}} alt="Photo of a Shiba Inu">
</mat-card>
    </div>
    </div>
    </div>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  toggleStepper = true;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  apod = {} as Apod;
  apods: Apod[] = [];

  mar = {} as Mars
  mars: Mars[] = [];

  constructor(private apodservice: ApodService,
    private marservice: MarsService, private observer: BreakpointObserver) {}

    ngAfterViewInit() {
      setTimeout(() => {
        this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
      }, 1);
     }

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
