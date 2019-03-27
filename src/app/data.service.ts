import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';

@Injectable()
export class DataService implements InMemoryDbService{
  
  createDb(){

   let  clients =  [
    { id:  1, first_name: 'Antonio Jesús', last_name: 'Ramos Madueño' },
    { id:  2, first_name: 'Carlos', last_name: 'Garcia Torres' },
    { id:  3, first_name: 'Rubén', last_name: 'Garzón Zafra' },
    { id:  4, first_name: 'Marcos', last_name: 'Gallardo Pérez' },
    { id:  5, first_name: 'José Rafael', last_name: 'Álvarez Espino' }
   ];
   return {clients};

  }
}