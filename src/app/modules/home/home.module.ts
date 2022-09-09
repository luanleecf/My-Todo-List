import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtomDeleteAllComponent } from './components/todo-buttom-delete-all/todo-buttom-delete-all.component';
import { TodoButtomAddItensComponent } from './components/todo-buttom-add-itens/todo-buttom-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtomDeleteAllComponent,
    TodoButtomAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
