import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lookup } from '../model';
import { WordService } from './word.service';

@Injectable()
export class IndustryService {
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
        for (let i = 0; i < 100; i++) {
            this.additionalGibberishIndustries.push({
                id: this.additionalGibberishIndustries.length + this.staticList.length + 1,
                text: wordService.getRandomWord(),
            });
        }
    }

    /**
     * Simulates HTTP request.
     */
    public getAll(): Observable<Lookup[]> {
        console.log('industryService.getAll()');
        return Observable.of([...this.staticList, ...this.additionalGibberishIndustries]).delay(2500);
    }
}
