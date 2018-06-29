import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * Implements the plumbing for using .takeUntil to unsubscribe from observables on ngOnDestroy.
 *
 * Filename: base-unsubscribe.component
 * Author: Alex Morris
 * Date Created: 10/09/2017
 */
export class BaseUnsubscribeComponent implements OnDestroy {

    /** For all observables that need to be unsubscribed from, chain .takeUntil(this.ngUnsubscribe) */
    protected ngUnsubscribe = new Subject<any>();

    public ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
