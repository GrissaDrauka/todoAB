import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { MatDialog } from '@angular/material';
import { PopUpAddComponent } from './pop-up-add/pop-up-add.component';
import { PopUpDetailsComponent } from './pop-up-details/pop-up-details.component';

export interface toDo{
  id : number,
  title : string,
  description : string,
  state : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'todoAB';
  toDoList : any[] = [];
  displayedColumns : string[] = [];
  toDoAdd : toDo = null;

  constructor(public dialog: MatDialog, private toDoService : TodoService){
    this.displayedColumns = ['title', 'state', 'action'];
  }

  ngOnInit(){
    this.toDoService.getToDoList().subscribe((data : any[])=>{
      console.log(data);
      this.toDoList = data;
    })
  }

  public deleteToDo(toDoId){
      this.toDoService.deleteToDo(toDoId).subscribe(()=>{
          this.toDoList = this.toDoList.filter(item => item.id != toDoId);
          console.log("ToDo deleted: ", toDoId);
      })
  }
  public openDialog() : void{
    const dialogAdd = this.dialog.open(PopUpAddComponent, {
      width: '50%',
      height: '50%',
      data : {id : this.toDoList.length}
    });

    dialogAdd.afterClosed().subscribe(()=> {
      this.toDoService.getToDoList().subscribe((data : any[])=>{
        console.log(data);
        this.toDoList = data;
      })
    });
  }

  public openDetails(toDoId){
    this.toDoService.getToDo(toDoId).subscribe((data : toDo)=>{
      console.log("app component " + data.title);
      this.toDoAdd = data;
      const dialogDetails = this.dialog.open(PopUpDetailsComponent, {
        width: '50%',
        height: '50%',
        data : {title : data.title, description : data.description, state : data.state}
      })
    })
    
  } 
}
