import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, Subject } from 'rxjs';
import { ITodos } from "./login.module";
import { Ilogin } from './login.module';
import { Input } from "@angular/core";
 
@Injectable()
export class DataService {
  baseURL: string = "https://jsonplaceholder.typicode.com/";
  id:any;
  constructor( private http: HttpClient){}
 

    // @Input() loggedUser:Ilogin[]=[];
    // @Input() todos:ITodos[]=[];
    // @Input() idUser:any;
  private user = new Subject<any>();
  public user$= this.user.asObservable();
  public userUp(data:any){
    this.user.next(data)
  }
  private todos= new Subject<any>();
  public todos$ = this.todos.asObservable();
  
  public getData(id:any):Observable<any>{ 
    // this.user.next(id)
    return this.http.get<Ilogin>(this.baseURL + 'users/' + id  )
  }
  public getTodos(id:any):Observable<any>{
    // this.user.next(id)
    console.log(id);
    // this.user.next(this.http.get<ITodos>(this.baseURL + 'todos/?=' + id))
    return this.http.get<ITodos>(this.baseURL + 'todos/?=userId=' + id)

  
  }


 }
