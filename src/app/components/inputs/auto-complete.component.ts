import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Lookup, LookupService } from '../../model';
import { BaseUnsubscribeComponent } from '../base-unsubscribe.component';
import { Subscription } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-auto-complete',
    template: `
        <input type="text" [ngModel]="text" (ngModelChange)="changeText($event)" />
        <ul>
            <li *ngFor="let match of matches">{{match.text}}</li>
        </ul>
    `
})
export class AutoCompleteComponent extends BaseUnsubscribeComponent implements OnChanges {
    @Input() public itemService: LookupService;
    @Input() public id: number;
    @Output() public idChange = new EventEmitter<number>();

    public text: string;
    public matches: Lookup[];
    private searchObservable: Subscription;

    constructor() { super(); }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.id) {
            this.itemService.findById(this.id)
                .takeUntil(this.ngUnsubscribe)
                .subscribe(found => {
                    if (found) {
                        this.text = found.text;
                    }
                });
        }
    }

    public changeText(newText: string): void {
        this.text = newText;

        // Cancel the previous query
        if (this.searchObservable) { this.searchObservable.unsubscribe(); }

        this.searchObservable = this.itemService
            .searchByText(newText)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(matches => {
                const exactMatch = matches.find(x => x.text.toLowerCase() === newText.toLowerCase());
                this.idChange.emit(exactMatch ? exactMatch.id : null);

                this.matches = matches.slice(0, 9);
            })
    }
}
