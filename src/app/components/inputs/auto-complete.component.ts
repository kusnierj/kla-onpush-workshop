import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Lookup } from '../../model';

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
export class AutoCompleteComponent implements OnChanges {
    @Input() public items: Lookup[];
    @Input() public id: number;
    @Output() public idChange = new EventEmitter<number>();

    public text: string;
    public matches: Lookup[];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.id) {
            const found = this.items.find(x => x.id === this.id);
            if (found) {
                this.text = found.text;
            }
        }
    }

    public changeText(newText: string): void {
        this.text = newText;
        const found = this.items.find(x => x.text.toLowerCase() === newText.toLowerCase());
        this.idChange.emit(found ? found.id : null);

        this.matches = this.items
            .filter(x => x.text.toLowerCase().startsWith(newText.toLowerCase()))
            .slice(0, 9);
    }
}
