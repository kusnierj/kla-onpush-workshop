import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Customer, Lookup } from '../../model';
import { CustomerTypeService } from '../../services/customer-type.service';
import { IndustryService } from '../../services/industry.service';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-detail-edit',
    templateUrl: 'customer-detail-edit.component.html',
})
export class CustomerDetailEditComponent implements OnChanges {
    @Input() public customer: Customer;

    public mutableCustomer: Customer;

    constructor(
        public customerTypeService: CustomerTypeService,
        public industryService: IndustryService,
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.customer) {
            // Copy customer so that we can modify it internally in this component
            this.mutableCustomer = Object.assign({}, this.customer);
        }
    }

    public save(): void {
        Object.assign(this.customer, this.mutableCustomer);
    }

    public cancel(): void {
        this.mutableCustomer = Object.assign({}, this.customer);
    }
}
