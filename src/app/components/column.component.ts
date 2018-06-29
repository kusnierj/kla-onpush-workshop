import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'op-column',
    template: `
        <div class="row">
            <div class="col-md-3">{{label}}</div>
            <div class="col-md-9"><ng-content></ng-content></div>
        </div>
    `
})
export class ColumnComponent {
    @Input() public label: string;
}
