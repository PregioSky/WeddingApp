import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Viaggio } from './viaggio.component'

const routes = [
  {
    path: '',
    component: Viaggio,
  },
]

@NgModule({
  declarations: [Viaggio],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Viaggio],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViaggioModule {}
