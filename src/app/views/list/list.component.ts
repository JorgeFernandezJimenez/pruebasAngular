import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @Input() public tasks: Array<Task>;

  constructor() { }

  ngOnInit() {
  }

}
