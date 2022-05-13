import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';
import { IAddress, Ilogin } from '../login.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
// @Input() load:boolean=false;
// @Input() userTodo=undefined;
// @Input() userToDoId=undefined;
// @Input() loggedData:any;
// @Input() toDoList=[];
constructor(private http: HttpClient, private DataService: DataService ) { }
toDoCheck:Array<any>=[];
toDoUncheck:Array<any>=[];

Ress:IAddress={
  street!:'',
  suite!: '',
  city!: '',
  zipcode!: '',
  geo: undefined
}

userInf:Ilogin={
  id: undefined,
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  address!: this.Ress,
};


  ngOnInit(): void {
    // this.load=true;
    
  }
  

}
