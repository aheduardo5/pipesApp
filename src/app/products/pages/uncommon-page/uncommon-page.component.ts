import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  //i18n select
  public name: string = 'Eduardo';
  public gender : 'male'| 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    this.name = 'Elideth';
    this.gender = 'female';
  }

  //i18n plural 
  public clients: string[] = ['Eduardo','Jose','Manuel','Elideth','Gueguito'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(){
    this.clients.shift();
  }

  //keyValue pipe
  public person = {
    name: 'Eduardo',
    age: 28,
    address: 'Vancouver, Canada' 
  }

  //async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Hay data en la promesa')
    }, 3000);
  }) 
}
  