import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeItemComponent } from './charge-item.component';

describe('ChargeItemComponent', () => {
  let component: ChargeItemComponent;
  let fixture: ComponentFixture<ChargeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
