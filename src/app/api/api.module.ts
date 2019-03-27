import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { AddComponent } from './cliente/add/add.component';
import { ProfileComponent } from './cliente/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../data.service';

@NgModule({
  declarations: [ClienteComponent, AddComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  exports: [ClienteComponent],
  providers: [ClienteService]
})
export class ApiModule { }
