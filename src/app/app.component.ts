import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: 'app-root',
	template: `
	<h1>App component ({{ title }})</h1>
	<router-outlet></router-outlet>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = this.lang.translate('app-test');

  constructor(private lang: TranslocoService) {
  }
}
