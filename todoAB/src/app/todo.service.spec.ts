import { TestBed, fakeAsync } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface ToDo{
  id : number,
  title : string,
  description : string,
  state : boolean
}

describe('TodoService', () => {
  let toDoService: TodoService;
  let toDo : ToDo;

  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule
  ]}));

  beforeEach(() => {
    toDoService = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(toDoService).toBeTruthy();
  });

  it('should get List not null', () => {
    const toDoList = toDoService.getToDoList();
    expect(toDoList).not.toBeNull();
  });

});
