import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module'
import { LandingPage } from './landing-page.component'

const routes = [
  {
    path: '',
    component: LandingPage,
  },
]

@NgModule({
  declarations: [LandingPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), FormsModule,
    ReactiveFormsModule],
  exports: [LandingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageModule {}
