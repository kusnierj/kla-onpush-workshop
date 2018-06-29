import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer, Lookup } from '../model';
import { WordService } from './word.service';
import { CustomerTypeService } from './customer-type.service';
import { IndustryService } from './industry.service';

@Injectable()
export class CustomerService {
    private nextCustomerId = 1;
    private allCustomers: Customer[] = [];
    private allCustomerTypes: Lookup[];
    private allIndustries: Lookup[];

    constructor(
        private wordService: WordService,
        customerTypeService: CustomerTypeService,
        industryService: IndustryService,
    ) {
        customerTypeService.getAll().subscribe(x => this.allCustomerTypes = x);
        industryService.getAll().subscribe(x => this.allIndustries = x);
    }

    /**
     * Simulates HTTP request.
     */
    public getMore(amountToLoad: number): Observable<Customer[]> {
        const customerList: Customer[] = [];
        for (let i = 0; i < amountToLoad; i++) {
            const relationsCount = Math.floor(Math.random() * 10);
            const relationIds = [];
            for (let j = 0; j < relationsCount; j++) {
                const newRelationId = Math.floor(Math.random() * (this.nextCustomerId - 2) + 1);
                if (!relationIds.includes(newRelationId) && newRelationId > 0) {
                    relationIds.push(newRelationId);
                }
            }

            const customerTypeIndex = Math.floor(Math.random() * this.allCustomerTypes.length);
            const industryIndex = Math.floor(Math.random() * this.allIndustries.length);

            customerList.push({
                customer_id: this.nextCustomerId++,
                name: this.wordService.build(2),

                address1: this.wordService.build(3) + ' St.',
                address2: i === 3 ? 'Suite ' + this.wordService.buildNumberString(3) : null,
                city: this.wordService.getRandomWord(),
                state: 'Michigan',
                zip: this.wordService.buildNumberString(5) + '-' + this.wordService.buildNumberString(4),

                customer_type_id: this.allCustomerTypes[customerTypeIndex].id,
                industry_id: this.allIndustries[industryIndex].id,
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
