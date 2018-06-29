import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../model';
import { WordService } from './word.service';

@Injectable()
export class CustomerService {
    private nextCustomerId = 1;
    private allCustomers: Customer[] = [];

    constructor(
        private wordService: WordService,
    ) {}

    /**
     * Simulates HTTP request.
     */
    public getMore(amountToLoad: number): Observable<Customer[]> {
        const customerList: Customer[] = [];
        for (let i = 0; i < amountToLoad; i++) {
            const relationsCount = Math.floor(Math.random() * 10);
            const relationIds = [];
            for (let j = 0; j < relationsCount; j++) {
                const newReleationId = Math.floor(Math.random() * (this.nextCustomerId - 1));
                if (!relationIds.includes(newReleationId)) {
                    relationIds.push(newReleationId);
                }
            }

            customerList.push({
                customer_id: this.nextCustomerId++,
                name: this.wordService.build(2),

                address1: this.wordService.build(3) + ' St.',
                address2: i === 3 ? 'Suite ' + this.wordService.buildNumberString(3) : null,
                city: this.wordService.getRandomWord(),
                state: 'Michigan',
                zip: this.wordService.buildNumberString(5) + '-' + this.wordService.buildNumberString(4),

                customer_type_id: 1,
                industry_id: 1,
                is_active: true,

                related_customer_ids: relationIds
            });
        }

        this.allCustomers.push(...customerList);

        return Observable.of(customerList);
    }

    public findById(customer_id: number): Customer {
        return this.allCustomers.find(c => c.customer_id === customer_id);
    }
}
