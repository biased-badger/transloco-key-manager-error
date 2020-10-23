import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: 'app-lazy',
	templateUrl: './lazy.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {
	greeting = this.lang.translate('Hello from lazy component', null, 'lazy-module');

	constructor(private lang: TranslocoService) {
	}
}
