import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  SERVER_URL: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getToDoList(){ 
       return this.httpClient.get(this.SERVER_URL + 'todoList');
  }

  public getToDo(toDoId){
       return this.httpClient.get(`${this.SERVER_URL + 'todoList'}/${toDoId}`); 
  }
  public createToDo(toDo: {id: number, title: string, description: string, state: boolean}){
      return this.httpClient.post(`${this.SERVER_URL + 'todoList'}`, toDo)
  }

  public deleteToDo(toDoId){
      return this.httpClient.delete(`${this.SERVER_URL + 'todoList'}/${toDoId}`)
  }
  public updateToDo(toDo: {id: number, title: string, description: string, state: boolean}){
      return this.httpClient.put(`${this.SERVER_URL + 'todoList'}/${toDo.id}`, toDo)
  }
}
