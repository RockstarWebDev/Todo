import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo[]>{
    return this.http.post<Todo[]>(this.apiUrl, todo);
  }
 
  updateTodo(todo: Todo): Observable<Todo[]>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo[]>(url, todo);
  }  

  deleteTodo(todoId: number): Observable<void>{
    const url = `${this.apiUrl}/${todoId}`;
    return this.http.delete<void>(this.apiUrl)
  }
 

}
