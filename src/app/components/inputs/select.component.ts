import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Lookup } from '../../model';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-select',
    template: `
        <select [(ngModel)]="id">
            <option *ngFor="let option of items" [value]="option.id">{{option.text}}</option>
        </select>
    `
})
export class SelectComponent {
    @Input() public items: Lookup[];
    @Input() public id: number;
    @Output() public idChange = new EventEmitter<number>();
}
