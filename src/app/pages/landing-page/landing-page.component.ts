import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  rawzfh3: string = ' '
  rawucpn: string = ' '
  raweub5: string = ' '
  rawo3tf: string = ' '
  rawgd6a: string = ' '
  rawx0mo: string = ' '
  rawvsbx: string = ' '
  raw3ahp: string = ' '
  raw3r01: string = ' '
  rawa2vu: string = ' '
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
