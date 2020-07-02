import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  public data:any;
  public todo:any
  constructor(private toDoservice: TodoService) {
    this.toDoservice.todos.subscribe((data)=>{
      if(data){
        this.todo="Good morning"
      }
      else{
        this.todo="Good Evening"
      }
      this.data=data
    })
   }

  ngOnInit() {
  }

 

}
