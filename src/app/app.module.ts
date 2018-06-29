import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { CustomerSectionComponent } from './components/customer-section.component';
import { ColumnComponent } from './components/column.component';
import { CustomerService } from './services/customer.service';
import { CustomerTypeService } from './services/customer-type.service';
import { IndustryService } from './services/industry.service';
import { WordService } from './services/word.service';
import { CustomerDetailEditComponent } from './components/customer-detail/customer-detail-edit.component';
import { CustomerDetailViewComponent } from './components/customer-detail/customer-detail-view.component';
import { SelectComponent } from './components/inputs/select.component';
import { AutoCompleteComponent } from './components/inputs/auto-complete.component';
import { BeFasterPipe } from './components/be-faster.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AutoCompleteComponent,
        ColumnComponent,
        CustomerDetailEditComponent,
        CustomerDetailViewComponent,
        CustomerSectionComponent,
        SelectComponent,
        BeFasterPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        CustomerTypeService,
        CustomerService,
        IndustryService,
        WordService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
