import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyName2Component } from './my-name2.component';

describe('MyName2Component', () => {
  let component: MyName2Component;
  let fixture: ComponentFixture<MyName2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyName2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyName2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
