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
      <button (click)="activateMars()" mat-button class="menu-button">
        <mat-icon class="marte-icon">home</mat-icon>
        <span class="marte-span">Marte</span>
      </button>
      <button (click)="activateApod()" mat-button class="menu-button">
        <mat-icon class="astro-icon">home</mat-icon>
        <span class="astro-span">Astros</span>
      </button>
    </mat-sidenav>
  </mat-sidenav-container>

  <div class="container">
    @if(mars_allow){
    <div *ngFor="let mar of mars" class="card-containe">
      <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{mar.rover}}</mat-card-title>
    <mat-card-subtitle>{{mar.earth_date}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src={{mar.img_src}} alt="Photo of a Shiba Inu">
</mat-card>
    </div>
    }@else {
      <div *ngFor="let apod of apods" class="card-containe">
      <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{apod.title}}</mat-card-title>
    <mat-card-subtitle>{{apod.date}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src={{apod.url}} alt="Photo of a Shiba Inu">
</mat-card>
    </div>
    }



    </div>
  </div>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  apod_allow: Boolean = false;
  mars_allow: Boolean = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  apod = {} as Apod;
  apods: Apod[] = [];

  mar = {} as Mars
  mars: Mars[] = [];

  constructor(private apodservice: ApodService,
    private marservice: MarsService, private observer: BreakpointObserver) {}

    activateMars(){
      this.mars_allow = true;
      this.apod_allow = false;
    }

    activateApod(){
      this.apod_allow = true;
      this.mars_allow = false;
    }

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
