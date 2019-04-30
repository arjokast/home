import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddayComponent } from './secondday.component';

describe('SeconddayComponent', () => {
  let component: SeconddayComponent;
  let fixture: ComponentFixture<SeconddayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconddayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconddayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
