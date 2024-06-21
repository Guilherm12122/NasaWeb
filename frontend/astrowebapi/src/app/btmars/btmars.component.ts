import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btmars',
  template: `
    <button mat-button (click)="plusClick()">Action</button>
  `,
  styleUrl: './btmars.component.css'
})
export class BtmarsComponent {
  @Output() onPlusClick = new EventEmitter<boolean>();

  plusClick() {
    this.onPlusClick.emit(true);
  }

}
