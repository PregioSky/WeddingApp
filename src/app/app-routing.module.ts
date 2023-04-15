import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'viaggio',
    loadChildren: () =>
      import('./pages/viaggio/viaggio.module').then((m) => m.ViaggioModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

