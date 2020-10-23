import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LazyComponent } from "src/app/lazy/lazy.component";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";

const routes: Routes = [
	{
		path: '',
		component: LazyComponent
	}
]

@NgModule({
	declarations: [LazyComponent],
	imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'lazy-module' }]
})
export class LazyModule {}
