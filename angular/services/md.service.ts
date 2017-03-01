import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {MD} from '../vo/mark';

@Injectable()
export class mdService{
    constructor(private http:Http){}
    getMd(index): Observable<MD>{
        return this.http.get('/md/'+index)
                    .map(res=>res.json());
    }
    insertMd(input){
        let headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('/md',input,{headers:headers})
            .map(res=>res.json());
    }
}
