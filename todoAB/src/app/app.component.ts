import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { MatDialog } from '@angular/material';
import { PopUpAddComponent } from './pop-up-add/pop-up-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'todoAB';
  toDoList : any[] = [];
  displayedColumns : string[] = [];

  constructor(public dialog: MatDialog, private toDoService : TodoService){
    this.displayedColumns = ['title', 'description', 'state', 'action'];
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
}
