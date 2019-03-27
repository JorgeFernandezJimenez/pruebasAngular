import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {

  public cliente: Cliente;
  @Output() public add = new EventEmitter<Cliente>();

  constructor() {
    this.cliente = new Cliente(null, '', '');
  }

  ngOnInit() {
  }

  public save() {
    this.add.emit(this.cliente);
    this.cliente = new Cliente(null, '', '');
  }

}
