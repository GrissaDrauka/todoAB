import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo.service';

export interface toDo{
  id : number,
  title : string,
  description : string,
  state : boolean
}

@Component({
  selector: 'app-pop-up-details',
  templateUrl: './pop-up-details.component.html',
  styleUrls: ['./pop-up-details.component.scss']
})
export class PopUpDetailsComponent implements OnInit {
  titleDetails : string;
  descDetail : string;
  stateDetail : boolean;

  constructor(public dialogDet: MatDialogRef<PopUpDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : toDo, 
    public toDoService : TodoService) 
    { 
      this.titleDetails = data.title;
      this.descDetail = data.description;
      this.stateDetail = data.state;
    }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogDet.close();
  }

}
