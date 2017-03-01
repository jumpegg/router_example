import {Component, OnInit} from '@angular/core';
import {mdService} from '../../services/md.service';
import {MD} from '../../vo/mark';
import * as marked from 'marked';


@Component({
    selector: 'md',
    templateUrl: 'client/components/md/md.component.html',
    providers:[mdService]
})
export class MdComponent implements OnInit{
    test:MD;
    get:MD;
    converted:any;
    output:any;

    // console.log(marked(this.get.content));
    constructor(private mdService:mdService){
        this.test = new MD("","","");
        this.get = new MD("","","");
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });
    }

    ngOnInit(){
        this.mdGetter(1);
    }

    mdGetter(index){
        this.mdService.getMd(index).subscribe(
            res => {
                console.log(res);
                this.get = res;
                this.converted = marked(this.get.content);
            },
            error => console.log(error)
        );
    }

    setMd(input){
        this.mdService.insertMd(input).subscribe(
            data => console.log(data),
            error => alert(error)
        );
    }

}
