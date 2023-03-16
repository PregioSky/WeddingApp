import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-viaggio',
  templateUrl: 'viaggio.component.html',
  styleUrls: ['viaggio.component.css'],
})
export class Viaggio {
  rawpfr0: string = ' '
  rawkcbp: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Viaggio - WeddingSite')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Viaggio - WeddingSite',
      },
    ])
  }

}
