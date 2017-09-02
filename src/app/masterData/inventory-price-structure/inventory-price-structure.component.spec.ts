import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPriceStructureComponent } from './inventory-price-structure.component';

describe('InventoryPriceStructureComponent', () => {
  let component: InventoryPriceStructureComponent;
  let fixture: ComponentFixture<InventoryPriceStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryPriceStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPriceStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
