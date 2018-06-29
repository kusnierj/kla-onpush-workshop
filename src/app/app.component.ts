import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from './model';
import { CustomerService } from './services/customer.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public customerList: Customer[];

    constructor(
        private customerService: CustomerService,
    ) {}

    public loadCustomers(amountToLoad: number): void {
        this.customerService.getMore(amountToLoad)
            .subscribe(x => this.customerList.push(...x));
    }

    public ngOnInit(): void {
        this.customerList = [];
        this.loadCustomers(500);
    }
}
