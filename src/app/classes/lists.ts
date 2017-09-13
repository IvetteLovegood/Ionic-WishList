import { ListItem } from './list-item';

export class List {
    name: string;
    finished: boolean;
    items: ListItem[];

    constructor( name: string){
        this.name = name;
        this.finished = false;        
    }

}
