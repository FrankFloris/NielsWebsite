import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijsinformatieEnBestellenComponent } from './prijsinformatie-en-bestellen.component';

describe('PrijsinformatieEnBestellenComponent', () => {
  let component: PrijsinformatieEnBestellenComponent;
  let fixture: ComponentFixture<PrijsinformatieEnBestellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrijsinformatieEnBestellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijsinformatieEnBestellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
