import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  raw0oz7: string = ' '
  rawoa91: string = ' '
  raw9zjt: string = ' '
  rawbf0p: string = ' '
  rawm2m8: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('WeddingSite')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WeddingSite',
      },
    ])
  }
}
