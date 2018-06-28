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

@NgModule({
    declarations: [
        AppComponent,
        ColumnComponent,
        CustomerSectionComponent
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
