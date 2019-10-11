import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo.service';
import { FormControl, Validators } from '@angular/forms';

export interface toDo{
  id : number,
  title : string,
  description : string,
  state : boolean
}


@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.scss']
})

export class PopUpAddComponent implements OnInit {

  constructor(public dialogAdd: MatDialogRef<PopUpAddComponent>, @Inject(MAT_DIALOG_DATA) public id : number, public toDoService : TodoService) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogAdd.close();
  }

  public addToDo(title, description){
    const toDo : toDo = { id : this.id + 1, title : title.value, description : description.value, state : false};
    this.toDoService.createToDo(toDo).subscribe(()=>{
      console.log("ToDo added " + toDo.title)
    })
    this.dialogAdd.close();
  }

}
