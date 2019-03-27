import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Array<Cliente>;

  constructor(
    private _clienteService: ClienteService
  ) {
    this.clientes = new Array();
  }

  ngOnInit() {
    this.refresh();
  }
  
  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   this.refresh();
  // }

  public refresh() {
    this.clientes = new Array();
    this._clienteService.getClientList$().subscribe(
      response => {
        this.clientes = response;
      },
      error => {
      
      }
      );
  }

  public delete(cliente: Cliente) {
    this._clienteService.deleteClient$(cliente)
    .subscribe(
      response => {
        this.refresh();
      },
      error => {

      }
    );
  }

  public save(cliente: Cliente) {
    this._clienteService.saveClient$(cliente).subscribe(
      response => {
        this.refresh();
      },
      error => {

      }
    );
  }

}
