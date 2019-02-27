import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria3Component } from './categoria3.component';

describe('Categoria3Component', () => {
  let component: Categoria3Component;
  let fixture: ComponentFixture<Categoria3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
