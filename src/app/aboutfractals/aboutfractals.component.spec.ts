import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfractalsComponent } from './aboutfractals.component';

describe('AboutfractalsComponent', () => {
  let component: AboutfractalsComponent;
  let fixture: ComponentFixture<AboutfractalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutfractalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfractalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
