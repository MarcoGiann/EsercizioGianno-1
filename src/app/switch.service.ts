import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { ITodos } from "./login.module";
 import { Subject } from "rxjs";
import { Ilogin } from './login.module';
 
@Injectable({ providedIn: 'root' })
export class SharedService {
    
}