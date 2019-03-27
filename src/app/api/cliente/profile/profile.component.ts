import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  public cliente: Cliente;
  public id: number;

  constructor(
    private _clientService: ClienteService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.cliente = new Cliente(null, '', '');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.loadClient();
    });
  }

  public loadClient() {
    this._clientService.getClient$(this.id).subscribe(
      response => {
        this.cliente = response;
      },
      error => {

      }
    )
  }

  public back() {
    this.location.back();
  }

  public update() {
    this._clientService.updateClient$(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clients']);
      },
      error => {

      }
    )
  }

}
