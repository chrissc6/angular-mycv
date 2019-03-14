import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEComponent } from './work-e.component';

describe('WorkEComponent', () => {
  let component: WorkEComponent;
  let fixture: ComponentFixture<WorkEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
