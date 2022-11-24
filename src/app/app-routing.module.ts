import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingMainPageComponent } from './wedding-main-page/wedding-main-page.component';

const routes: Routes = [{path: 'mainpage', component: WeddingMainPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

