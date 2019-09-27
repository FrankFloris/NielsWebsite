import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalshopComponent } from './fractalshop.component';

describe('FractalshopComponent', () => {
  let component: FractalshopComponent;
  let fixture: ComponentFixture<FractalshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractalshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractalshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
