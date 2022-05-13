  import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoComponent } from '../accesso/accesso.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  DataService: any;

  constructor(router:ActivatedRoute, DataService:DataService) { }

     ngOnInit(): void {

  }
  
  // pazzo(){
  //   console.log(this.DataService.loggedUser) }
}
