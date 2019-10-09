import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'todoAB';
  toDoList : any[] = [];
  displayedColumns : string[] = [];

  constructor(private toDoService : TodoService){
    this.displayedColumns = ['title', 'description', 'state', 'action'];
  }

  ngOnInit(){
    this.toDoService.getToDoList().subscribe((data : any[])=>{
      console.log(data);
      this.toDoList = data;
    })
  }

}
