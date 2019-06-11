import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAnimacionesPage } from './desarrollo-animaciones.page';

describe('DesarrolloAnimacionesPage', () => {
  let component: DesarrolloAnimacionesPage;
  let fixture: ComponentFixture<DesarrolloAnimacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloAnimacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloAnimacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
