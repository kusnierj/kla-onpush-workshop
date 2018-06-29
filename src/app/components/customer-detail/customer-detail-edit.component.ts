import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../model';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-detail-edit',
    templateUrl: 'customer-detail-edit.component.html',
})
export class CustomerDetailEditComponent {
    @Input() public customer: Customer;
}
