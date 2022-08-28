import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AssessmentsComponent } from "./assessments/assessments.component";

const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'assessments',component:AssessmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
