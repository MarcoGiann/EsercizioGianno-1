import {
  Component,
  OnInit,
  Output,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { Ilogin } from '../login.module';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ITodos } from '../login.module';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoComponent } from '../accesso/accesso.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() userUpdated = new EventEmitter<ITodos[]>(); // la lista aggiornata con ogni evento aggiornato
  userTodos: Array<ITodos> = [];

  id!: number;
  toDo: ITodos = {
    userId: 1,
    id: 1,
    title: '',
    completed: false,
  };
  errorMessage = '';
  constructor(private http: HttpClient, private DataService: DataService) {}

  ngOnInit(): void {}

  public getTodos() {
    let userId= this.DataService.user$
 console.log(this.toDo)
    this.DataService.getTodos(this.toDo.userId).subscribe((response) => {
      
      console.log(response);
      console.log(this.toDo.id);
    });
  }
  //   this.errorMessage = '';
  //   this.DataService
  //     .getTodos(this.DataService.loggedUser)
  //     .subscribe((response) => {
  //       this.DataService.todos = response;
  //       this.userTodo.emit(this.userTodos)
  //       console.log(this.DataService.todos)

  //     })
  // }
  select($event: any) {
    this.userTodos.forEach((dati) => {
      //array è UserTodos con tutti i todo, dati saranno gli elementi che prendiamo in considerazione per ogni elemento dell'array
      if (dati.id == $event.target.value)
        dati.completed = $event.target.checked;
      console.log(dati.completed);
    });
    this.userUpdated.emit(this.userTodos);
  }
}
