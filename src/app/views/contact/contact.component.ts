import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {
  }

  public showContact() {
    this.show = !this.show;
  }

}
