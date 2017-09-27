import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitOverviewComponent } from './visit-overview.component';

describe('VisitOverviewComponent', () => {
  let component: VisitOverviewComponent;
  let fixture: ComponentFixture<VisitOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
