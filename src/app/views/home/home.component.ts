import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Input() public title: String;

  constructor() { }

  ngOnInit() {
  }

}
