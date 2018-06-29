import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../model';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-detail-view',
    templateUrl: 'customer-detail-view.component.html',
})
export class CustomerDetailViewComponent {
    @Input() public customer: Customer;
}
