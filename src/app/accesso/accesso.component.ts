import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Ilogin } from '../login.module';
import { DataService } from '../data.service';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.css'],
})
export class AccessoComponent implements OnInit {
  form!: FormGroup;
  username: string = '';

  @Output() id = new EventEmitter<any>();
  @Output() logged = new EventEmitter<any>();
  // il valore id presente in questo Ts al componente padre App.component è pronto per essere esportato
  // il che verrà fatto con la sottoscrizione alla funzione Get DAta
  loading: boolean = false;
  errorMessage: string = '';
  login: Ilogin = {
    id: undefined,
    name: '',
    username: '', 
    email: '',
    phone: '',
    website: ''
  };


  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    // private route: ActivatedRoute
  
    ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      id: ['', Validators.required],
    })
    // this.dataService.getData(this.login.id).subscribe((login:Ilogin[])=> {
    //   this.login=this.login;
    //   console.log(this.login)
      
    // });
  }
  public userz=[];
  public getData() {
    this.loading = true;
    this.errorMessage = '';
    this.dataService
      .getData(this.login.id) //
      .subscribe((response) => {
        console.log('response received');
        if (this.username == response.username) {
          this.loading = false;
          this.dataService.userUp = response;
          this.login.id=response.id;
          // console.log(this.dataService.userUp)
          console.log(this.login.id)         
          this.router.navigate(['/todos'])
          alert('Sei Stato Loggato');
        } else {
          this.loading = true;
          alert(`c'è stato un errore`);
        }
      });
  }
  

}
