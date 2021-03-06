"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodosCrud_service_1 = require("../../services/TodosCrud.service");
var todo_1 = require("../../vo/todo");
var TodosComponent = (function () {
    function TodosComponent(todosService) {
        this.todosService = todosService;
        this.test = new todo_1.Todo("", "", "");
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.TodoList();
    };
    TodosComponent.prototype.TodoList = function () {
        var _this = this;
        this.todosService.getTodoList().subscribe(function (data) { return _this.todoList = data; }, function (error) { return alert(error); });
    };
    TodosComponent.prototype.pushTodo = function (input) {
        var _this = this;
        this.todosService.insertTodo(input).subscribe(function (data) { return _this.TodoList(); }, function (error) { return alert(error); });
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    core_1.Component({
        selector: 'todos',
        templateUrl: 'client/components/todos/todos.component.html',
        providers: [TodosCrud_service_1.TodoCrudService]
    }),
    __metadata("design:paramtypes", [TodosCrud_service_1.TodoCrudService])
], TodosComponent);
exports.TodosComponent = TodosComponent;

//# sourceMappingURL=../../client/components/todos/todos.component.js.map
