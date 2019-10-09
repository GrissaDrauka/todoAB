import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    let  todoList =  [
      {  id: 1, title:'ToDo 1', description: 'Todo number 1 oidfsjgo dfguhhsdfihuds hfu dfshgodhfsiudshfui ghbsd fgdfshi dsfh kjfd jl jdfj dfp jdfjoidfjhjidi l,jdf jfd kjps mokg ofsdfkg jdsfg fdskjgj dfsjg sdfk gsdk fos dfkmkm sgl', state:false },
      {  id: 2, title:'ToDo 2', description: 'Todo number 2', state:false },
      {  id: 3, title:'ToDo 3', description: 'Todo number 3', state:false },
      {  id: 4, title:'ToDo 4', description: 'Todo number 4', state:false },
      {  id: 5, title:'ToDo 5', description: 'Todo number 5', state:false }
     ];
  
     return {todoList};
  }
}
