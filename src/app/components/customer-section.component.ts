import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Customer } from '../model';
import { CustomerService } from '../services/customer.service';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-section',
    templateUrl: 'customer-section.component.html',
})
export class CustomerSectionComponent implements OnChanges {
    @Input() public customer: Customer;
    @Input() public isExpanded = true;
    @Output() customerChange = new EventEmitter<Customer>();

    public isEdit = false;

    constructor(
        private customerService: CustomerService,
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
    }

    public findCustomer(customerId: number): Customer {
        return this.customerService.findById(customerId);
    }

    public onCustomerChanged(customer: Customer) {
        this.customerChange.emit(customer);
    }
}
