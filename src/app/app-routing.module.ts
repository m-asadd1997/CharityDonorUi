import { FormComponent } from "./form/form.component";
import { MyName2Component } from "./my-name2/my-name2.component";
import { MyName1Component } from "./my-name1/my-name1.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCharityComponent } from './view-charity/view-charity.component';


const routes: Routes = [
  {
    path:"routeToMyFirstComponent",component:MyName1Component
  },
  {
    path:'',component:FormComponent
  },
  {
    path:"routeToViewCharity",component:ViewCharityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
