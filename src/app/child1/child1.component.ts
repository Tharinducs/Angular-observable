import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() reciveFromChild2
  constructor(private toDoService:TodoService) { }

  ngOnInit() {
  }


  setTodo(){
    console.log("hre>>>>>>>")
      this.toDoService.settodod()
  }

}
