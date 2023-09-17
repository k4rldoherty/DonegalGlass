import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTemplateComponent } from './pages/home-page-template/home-page-template.component';

const routes: Routes = [{
  path: "", component: HomePageTemplateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
