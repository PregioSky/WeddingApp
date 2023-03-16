import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SolidButton } from './solid-button/solid-button.component'
import { OutlineButton } from './outline-button/outline-button.component'
import { BlogPostCard4 } from './blog-post-card4/blog-post-card4.component'
import { PlaceCard } from './place-card/place-card.component'

@NgModule({
  declarations: [SolidButton, OutlineButton, BlogPostCard4, PlaceCard],
  imports: [CommonModule, RouterModule],
  exports: [SolidButton, OutlineButton, BlogPostCard4, PlaceCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
