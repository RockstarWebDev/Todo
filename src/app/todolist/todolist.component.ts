import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.fetchTodolist(); 
  }
 
   fetchTodolist():void {
    this.todoService.getTodos().subscribe({
      next: (response) =>{
        this.todos = response;
      },
      error: (error) =>{
         console.log("Error fetching todos",error);
      }
    });
   }

}
