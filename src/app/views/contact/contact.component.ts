import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @Output() public contact = new EventEmitter<any>();
  public show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {
  }

  public showContact() {
    this.show = true;
  }

}
