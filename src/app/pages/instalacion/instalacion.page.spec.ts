import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionPage } from './instalacion.page';

describe('InstalacionPage', () => {
  let component: InstalacionPage;
  let fixture: ComponentFixture<InstalacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
