import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProfileComponent } from './cliente/profile/profile.component';

const routes: Routes = [
    {path: '', component: ClienteComponent},
    {path: ':id', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApiRoutingModule { }