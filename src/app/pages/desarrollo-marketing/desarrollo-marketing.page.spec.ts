import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloMarketingPage } from './desarrollo-marketing.page';

describe('DesarrolloMarketingPage', () => {
  let component: DesarrolloMarketingPage;
  let fixture: ComponentFixture<DesarrolloMarketingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloMarketingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloMarketingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
