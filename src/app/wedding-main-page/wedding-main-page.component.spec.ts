import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingMainPageComponent } from './wedding-main-page.component';

describe('WeddingMainPageComponent', () => {
  let component: WeddingMainPageComponent;
  let fixture: ComponentFixture<WeddingMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
