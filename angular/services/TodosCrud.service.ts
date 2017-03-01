import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TodoCrudService{
    constructor(private http:Http){}

    getTodoList(){
        return this.http.get('/todos')
                    .map(res=>res.json());
    }

    insertTodo(input){
        let headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('/todos',input,{headers:headers})
            .map(res=>res.json());
    }
}
