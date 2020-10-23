import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: 'app-main',
	template: `
		<p>Main component</p>
		<a routerLink="lazy">Lazy component</a>
		
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
