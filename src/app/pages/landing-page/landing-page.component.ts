import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIService, Guest } from '../../API.service';
import { Modal } from 'bootstrap';



@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  rawllll: string = ' '
  rawhc37: string = ' '
  rawr7fk: string = ' '
  rawuvz4: string = ' '
  raw8m5w: string = ' '
  rawlchq: string = ' '
  raw90fm: string = ' '
  rawb2j8: string = ' '
  rawum62: string = ' '
  raw0iqg: string = ' '
  public createForm: FormGroup;
  disableButtonOnInit=true
  serviceOK=true;

  constructor(private title: Title, private meta: Meta,  private api: APIService, private fb: FormBuilder) {
    this.title.setTitle('WeddingSite')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WeddingSite',
      },
    ])
    this.createForm = this.fb.group({
      partecipation: ['', Validators.required],
      nameSurname: ['', Validators.required],
      intolerances: [''],
      shuttle: [''],
      freeText: ['']
    });
  }
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.createForm.markAllAsTouched();
    this.createForm.patchValue({
      partecipation: 'Y',
      nameSurname: '',
      intolerances: '',
      shuttle: 'N',
      freeText: ''
  })
}

  public onCreate(guest: Guest) {
    this.api
      .CreateGuest(guest)
      .then(() => {
        console.log('nome e cognome: ' + guest.nameSurname + " | partecipa: "+ guest.partecipation + " | navetta: " + guest.shuttle+" | intolleranze: " + guest.intolerances + "testo: " + guest.freeText);
        this.createForm.reset();
        this.serviceOK=true;
        const element = document.getElementById('outcomeModal') as HTMLElement;
        const myModal = new Modal(element);
        myModal.show();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
        this.serviceOK=false;
        const element = document.getElementById('outcomeModal') as HTMLElement;
        const myModal = new Modal(element);
        myModal.show();
      });
  }

scroll(el: HTMLElement) {
  console.log('id ', el);
  const box = document.getElementById(el.id)!;
  var h = document.getElementById("headertab")!.offsetHeight + "px";
  box.style.scrollMargin= h;
  el.scrollIntoView({behavior: 'smooth'});
}

}
