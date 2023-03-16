
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterModule } from '@angular/router'
import { ComponentsModule } from './components/components.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostCard4 } from './components/blog-post-card4/blog-post-card4.component';
import { OutlineButton } from './components/outline-button/outline-button.component';
import { PlaceCard } from './components/place-card/place-card.component';
import { SolidButton } from './components/solid-button/solid-button.component';

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
]


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule, BrowserModule, RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    }), ComponentsModule
  ],
  exports:[SolidButton, OutlineButton, BlogPostCard4, PlaceCard],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
