import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeethMarkingComponent } from './teeth-marking.component';

describe('TeethMarkingComponent', () => {
  let component: TeethMarkingComponent;
  let fixture: ComponentFixture<TeethMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeethMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeethMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
