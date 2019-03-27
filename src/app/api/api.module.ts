import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { AddComponent } from './cliente/add/add.component';
import { ProfileComponent } from './cliente/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ApiRoutingModule } from './api-routing.module';

@NgModule({
  declarations: [ClienteComponent, AddComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApiRoutingModule
  ],
  providers: [ClienteService]
})
export class ApiModule { }
