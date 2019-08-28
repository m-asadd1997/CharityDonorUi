import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyName1Component } from './my-name1.component';

describe('MyName1Component', () => {
  let component: MyName1Component;
  let fixture: ComponentFixture<MyName1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyName1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyName1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
