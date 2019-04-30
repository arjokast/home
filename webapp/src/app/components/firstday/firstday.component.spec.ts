import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdayComponent } from './firstday.component';

describe('FirstdayComponent', () => {
  let component: FirstdayComponent;
  let fixture: ComponentFixture<FirstdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
