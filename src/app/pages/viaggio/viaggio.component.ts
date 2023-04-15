import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-viaggio',
  templateUrl: 'viaggio.component.html',
  styleUrls: ['viaggio.component.css'],
})
export class Viaggio {
  rawop04: string = ' '
  iban=false;
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Viaggio - WeddingSite')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Viaggio - WeddingSite',
      },
    ])
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  showIban() {
    this.iban=true;
  }

  scroll(el: HTMLElement) {
    console.log('id ', el);
    const box = document.getElementById(el.id)!;
    var h = document.getElementById("headertab")!.offsetHeight + "px";
    box.style.scrollMargin= h;
    el.scrollIntoView({behavior: 'smooth'});
  }
}



