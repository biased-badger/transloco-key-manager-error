import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "src/app/main.component";

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'lazy',
		loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
