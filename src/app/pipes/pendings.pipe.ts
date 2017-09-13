// [!] Impure Pipe
import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../app/classes/generic-classes';

@Pipe({
    name: 'pendings',
    pure: false
})

export class PendingsPipe implements PipeTransform {
    transform(lists: List[], status: boolean = false): List[] {

        let _newList: List[] = [];

        for (let list of lists) {
            if ( list.finished == status ) {
                _newList.push( list )
            }
        }
        return _newList;
    }
}
