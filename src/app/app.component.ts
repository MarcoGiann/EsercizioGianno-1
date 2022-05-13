import { Component, OnInit } from '@angular/core';

import { Ilogin } from './login.module';
import { DataService } from './data.service';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Output() userInfo= new EventEmitter();
  load:any;
  toDoUn:any;
  userId:any;  // proprietà creata per accoglie il valore id emesso dal componente figlio (accesso.ts)
  dati!: Ilogin;
  userLogged:any;
  list:any;
  check:any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
  
  }
  getLogged($event:Event){
    this.userLogged=$event;
    // this.userInfo.emit(this.userLogged);

  

  }
getUserId($event:Event){  // tramite questa funzione assegni il valore id ricevuto dal figlio alla prporieta del padre
  this.userId=$event; 

}
getTodoUn($event:Event){
  this.toDoUn=$event;

}
getLoad($event:Event) {
  this.load=$event;
}
getList($event:Event){
  this.list=$event;
}
getCheck($event:any){
this.check=$event;
this.check.splice(this.check.value)

}
}