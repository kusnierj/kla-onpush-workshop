import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lookup, LookupService } from '../model';
import { WordService } from './word.service';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class IndustryService implements LookupService {
    private staticList: Lookup[] = [
        { id: 1, text: 'Software' },
        { id: 2, text: 'Bank' },
        { id: 3, text: 'Credit Union' },
        { id: 4, text: 'Other' },
        { id: 5, text: 'Restaurant' },
        { id: 6, text: 'Landscaping' },
        { id: 7, text: 'Insurance' },
        { id: 8, text: 'Non Profit' },
    ];

    private additionalGibberishIndustries: Lookup[];

    constructor(
        wordService: WordService,
    ) {
        // Build an extra 100 industries for testing purposes
        this.additionalGibberishIndustries = [];
        for (let i = 0; i < 10000; i++) {
            this.additionalGibberishIndustries.push({
                id: this.additionalGibberishIndustries.length + this.staticList.length + 1,
                text: wordService.build(3),
            });
        }
    }

    /**
     * Simulates HTTP request.
     */
    public getAll(): Observable<Lookup[]> {
        return Observable.of([...this.staticList, ...this.additionalGibberishIndustries]);
    }

    /**
     * Simulates HTTP request.
     */
    public searchByText(text: string): Observable<Lookup[]> {
        return this.getAll()
            .pipe(
                delay(100),
                map(result => result.filter(x => x.text.toLowerCase().startsWith(text.toLowerCase()))),
            );
    }

    /**
     * Simulates HTTP request.
     */
    public findById(id: number): Observable<Lookup> {
        return this.getAll()
            .pipe(
                delay(100),
                map(result => result.find(x => x.id === id)),
            );
    }
}
