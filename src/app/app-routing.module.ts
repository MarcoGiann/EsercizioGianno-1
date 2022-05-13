import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import{AccessoComponent } from "./accesso/accesso.component"
import { SummaryComponent } from "./summary/summary.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes:Routes=[
    {path: 'login', component:AccessoComponent},
    {path: 'todos', component:TodoListComponent},
    {path:'Summary', component:SummaryComponent}
]
@NgModule({
    imports:  [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}