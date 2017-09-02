import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceStructureComponent } from './price-structure.component';

describe('PriceStructureComponent', () => {
  let component: PriceStructureComponent;
  let fixture: ComponentFixture<PriceStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
