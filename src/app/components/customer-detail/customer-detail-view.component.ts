import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Customer, Lookup } from '../../model';
import { CustomerTypeService } from '../../services/customer-type.service';
import { IndustryService } from '../../services/industry.service';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-detail-view',
    templateUrl: 'customer-detail-view.component.html',
})
export class CustomerDetailViewComponent implements OnInit {
    @Input() public customer: Customer;

    private customerTypes: Lookup[];
    private industryTypes: Lookup[];

    constructor(
        private customerTypeService: CustomerTypeService,
        private industryTypeService: IndustryService,
    ) {}

    public ngOnInit(): void {
        this.customerTypeService.getAll().subscribe(x => this.customerTypes = x);
        this.industryTypeService.getAll().subscribe(x => this.industryTypes = x);
    }

    public getCustomerType(id: number): Lookup {
        return this.customerTypes.find(x => x.id === id);
    }

    public getIndustryType(id: number): Lookup {
        return this.industryTypes.find(x => x.id === id);
    }
}
