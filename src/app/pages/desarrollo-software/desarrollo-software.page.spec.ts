import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloSoftwarePage } from './desarrollo-software.page';

describe('DesarrolloSoftwarePage', () => {
  let component: DesarrolloSoftwarePage;
  let fixture: ComponentFixture<DesarrolloSoftwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloSoftwarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
