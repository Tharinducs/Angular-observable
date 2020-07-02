import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,Subject } from 'rxjs';
import { map } from 'rxjs/operators';



export interface Todo {
  id: number;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: BehaviorSubject<Boolean>=new BehaviorSubject<boolean>(false);
  
  constructor() { 
    
  }

  get todos() {
    return this._todos.asObservable();
  }

  settodod(){
    console.log("Hereeeeeeeeeee")
    this._todos.next(true)
  }

  
}
