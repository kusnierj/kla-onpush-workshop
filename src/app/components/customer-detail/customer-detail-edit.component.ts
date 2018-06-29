import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../../model';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-detail-edit',
    templateUrl: 'customer-detail-edit.component.html',
})
export class CustomerDetailEditComponent implements OnChanges {
    @Input() public customer: Customer;

    public mutableCustomer: Customer;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.customer) {
            // Copy customer so that we can modify it internally in this component
            this.mutableCustomer = Object.assign({}, this.customer);
        }
    }

    public save(): void {
        // TODO: Why doesn't this update other instances?
        this.customer = this.mutableCustomer;
    }

    public cancel(): void {
        this.mutableCustomer = Object.assign({}, this.customer);
    }
}
