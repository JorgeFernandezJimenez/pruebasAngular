import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  public form;
  public task: Task;
  public types: Array<String>;
  @Output() public add = new EventEmitter<Task>();

  constructor() {
    this.task = new Task('', '', '');
    this.types = ['Important', 'Management'];
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.task.title, [
        Validators.required,
        Validators.pattern("[ a-zA-Zá-úÁ-Ú]+")
      ]),
      'description': new FormControl(this.task.description, [
        Validators.pattern("[ a-zA-Zá-úÁ-Ú0-9]*")
      ]),
      'type': new FormControl(this.task.type, [
        Validators.required
      ])
    });
  }

  public save() {
    this.add.emit(this.task);
    this.task = new Task('', '', '');
  }

}
