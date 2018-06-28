import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-column',
    template: `
        <div class="row">
            <div class="col-md-2">{{label}}</div>
            <div class="col-md-4"><ng-content></ng-content></div>
        </div>
    `
})
export class ColumnComponent {
    @Input() public label: string;
}
