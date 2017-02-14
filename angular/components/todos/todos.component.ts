import {Component, OnInit} from '@angular/core';
import {TodoCrudService} from '../../services/TodosCrud.service';
import {Todo} from '../../vo/todo';

@Component({
    selector: 'todos',
    templateUrl: 'client/components/todos/todos.component.html',
    providers:[TodoCrudService]
})
export class TodosComponent implements OnInit{

    todoList:Todo[];
    test:Todo;

    constructor(private todosService:TodoCrudService){
        this.test = new Todo("","","");
    }

    ngOnInit(){
        this.todosService.getTodoList().subscribe(
            data => this.todoList = data,
            error => alert(error)
        );
    }

    pushTodo(input){
        this.todosService.insertTodo(input).subscribe(
            data => console.log(data),
            error => alert(error)
        );
    }




}
