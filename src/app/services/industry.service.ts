import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lookup } from '../model';

@Injectable()
export class IndustryService {
    /**
     * Simulates HTTP request.
     */
    public getAll(): Observable<Lookup[]> {
        return Observable.of([
            { id: 1, text: 'Software' },
            { id: 2, text: 'Bank' },
            { id: 3, text: 'Credit Union' },
            { id: 4, text: 'Other' },
            { id: 5, text: 'Restaurant' },
            { id: 6, text: 'Landscaping' },
            { id: 7, text: 'Insurance' },
            { id: 8, text: 'Non Profit' },
        ]);
    }
}
