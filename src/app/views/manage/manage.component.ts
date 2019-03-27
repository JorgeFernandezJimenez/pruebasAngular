import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: []
})
export class ManageComponent implements OnInit {

  public tasks: Array<Task>;

  constructor() {
    this.tasks = new Array();
  }

  ngOnInit() {
  }

  public save(task: Task) {
    this.tasks.push(task);
  }

}
