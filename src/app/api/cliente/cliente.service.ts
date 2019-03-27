import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  public getClientList$(): Observable<Cliente[]> {
    let url = environment.apiUrl + 'users?page=2';
    return this.http.get<Cliente[]>(url);
  }

  public getClient$(id: number): Observable<Cliente> {
    let url = environment.apiUrl + "users/" + id;
    return this.http.get<Cliente>(url);
  }

  public saveClient$(cliente: Cliente): Observable<any> {
    let json = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = environment.apiUrl + "users?page=2";
    
    return this.http.post(url, json, {headers: headers});
  }

  public deleteClient$(cliente: Cliente): Observable<any> {
    let url = environment.apiUrl + "users/" + cliente.id;
    return this.http.delete(url);
  }

}
