import { Injectable } from '@angular/core';
import { Lookup } from '../model';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerTypeService {
    /**
     * Simulates HTTP request.
     */
    public getAll(): Observable<Lookup[]> {
        console.log('customerTypeService.getAll()');
        return Observable.of([
            { id: 1, text: 'Owner' },
            { id: 2, text: 'Organization' },
            { id: 3, text: 'Contact' },
            { id: 4, text: 'Other' },
        ]).delay(2500);
    }
}
