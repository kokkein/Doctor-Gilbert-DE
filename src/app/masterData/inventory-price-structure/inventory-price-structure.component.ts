import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-price-structure',
  templateUrl: './inventory-price-structure.component.html',
  styleUrls: ['./inventory-price-structure.component.css']
})
export class InventoryPriceStructureComponent implements OnInit {

  data: any = {};
  dataSource: any;
  dataList: any = [];
  msgs: Message[] = [];
  inventoryCategorys;
  inventoryCategoryCtrl: FormControl;
  filteredinventoryCategorys: any;
  inventorySubCategorys;
  inventorySubCategoryCtrl: FormControl;
  filteredinventorySubCategorys: any;

  displayinventorySubCategoryFn(value: any): string {
    return value && typeof value === 'object' ? value.inventorySubCategoryName : value;
  }
  filterInventorySubCategorys(val: string) {
    return val ? this.inventorySubCategorys.filter((s) => new RegExp(val, 'gi').test(s.inventorySubCategoryName))
               : this.inventorySubCategorys;
  }
  displayinventoryCategoryFn(value: any): string {
    return value && typeof value === 'object' ? value.inventoryCategoryName : value;
  }
  filterInventoryCategorys(val: string) {
    return val ? this.inventoryCategorys.filter((s) => new RegExp(val, 'gi').test(s.inventoryCategoryName))
               : this.inventoryCategorys;
  }

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { 
    this.inventoryCategoryCtrl = new FormControl({inventoryCategoryID: 0, inventoryCategoryName: ''});
    this.inventorySubCategoryCtrl = new FormControl({inventorySubCategoryID: 0, inventorySubCategoryName: ''});
  }

  ngOnInit() {
      this.MasterDataService.GetInventoryCategory().subscribe(category => {
      this.inventoryCategorys = category;
      //here only start filter
      this.filteredinventoryCategorys = this.inventoryCategoryCtrl.valueChanges
          .startWith(this.inventoryCategoryCtrl.value)
          .map(val => this.displayinventoryCategoryFn(val))
          .map(name => this.filterInventoryCategorys(name));
      });
      this.MasterDataService.GetInventorySubCategory().subscribe(subCategory => {
      this.inventorySubCategorys = subCategory;
      //here only start filter
      this.filteredinventorySubCategorys = this.inventorySubCategoryCtrl.valueChanges
          .startWith(this.inventorySubCategoryCtrl.value)
          .map(val => this.displayinventorySubCategoryFn(val))
          .map(name => this.filterInventorySubCategorys(name));
      });
      this.MasterDataService.GetInventory()
      .subscribe(x => {
        this.dataSource  = x;
      });
  }

}
