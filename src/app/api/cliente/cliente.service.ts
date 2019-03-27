import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  private apiUrl: string = '/api/';

  constructor(
    private http: HttpClient
  ) { }

  public getClientList$(): Observable<Cliente[]> {
    let url = this.apiUrl + 'clients';
    console.log(url);
    return this.http.get<Cliente[]>(url);
  }

  public getClient$(id: number): Observable<Cliente> {
    let url = this.apiUrl + "clients/" + id;
    return this.http.get<Cliente>(url);
  }

  public saveClient$(cliente: Cliente): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = this.apiUrl + "clients";
    
    return this.http.post(url, cliente, {headers: headers});
  }

  public deleteClient$(cliente: Cliente): Observable<any> {
    let url = this.apiUrl + "clients/" + cliente.id;
    return this.http.delete(url);
  }

  public updateClient$(cliente: Cliente): Observable<any> {
    let url = this.apiUrl + 'clients';
    return this.http.put(url, cliente);
  }

}
