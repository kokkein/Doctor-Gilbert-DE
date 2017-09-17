import { GDService } from './../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-charge-item',
  templateUrl: './charge-item.component.html',
  styleUrls: ['./charge-item.component.css']
})
export class ChargeItemComponent implements OnInit {

  pregnancyCategories: any = [];
  medicationClasses: any = [];
  data: any = {};
  dataList: any = [];
  chargeItemID;
  brandNames;
  inventoryBrandCtrl: FormControl;
  filteredinventoryBrands: any;
  inventoryGenerics;
  inventoryGenericCtrl: FormControl;
  filteredinventoryGenerics: any;
  inventoryATCClassifications;
  inventoryATCClassificationCtrl: FormControl;
  filteredinventoryATCClassifications: any;
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
  displayinventoryBrandFn(value: any): string {
    return value && typeof value === 'object' ? value.inventoryBrandName : value;
  }
  filterBrandNames(val: string) {
    return val ? this.brandNames.filter((s) => new RegExp(val, 'gi').test(s.inventoryBrandName))
               : this.brandNames;
  }
  displayinventoryGenericFn(value: any): string {
    return value && typeof value === 'object' ? value.inventoryGenericName : value;
  }
  filterInventoryGenerics(val: string) {
    return val ? this.inventoryGenerics.filter((s) => new RegExp(val, 'gi').test(s.inventoryGenericName))
               : this.inventoryGenerics;
  }
  displayinventoryATCClassificationFn(value: any): string {
    return value && typeof value === 'object' ? value.inventoryATCClassificationName : value;
  }
  filterInventoryATCClassifications(val: string) {
    return val ? this.inventoryATCClassifications.filter((s) => new RegExp(val, 'gi').test(s.inventoryATCClassificationName))
               : this.inventoryATCClassifications;
  }

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    
    this.inventoryBrandCtrl = new FormControl({inventoryBrandID: 0, inventoryBrandName: ''});
    this.inventoryGenericCtrl = new FormControl({inventoryGenericID: 0, inventoryGenericName: ''});
    this.inventoryATCClassificationCtrl = new FormControl({inventoryATCClassificationID: 0, inventoryATCClassificationName: ''});
    this.inventoryCategoryCtrl = new FormControl({inventoryCategoryID: 0, inventoryCategoryName: ''});
    this.inventorySubCategoryCtrl = new FormControl({inventorySubCategoryID: 0, inventorySubCategoryName: ''});

    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.chargeItemID = +p['id'];
        if (this.data.chargeItemID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/charge-item/', event.selectedRowKeys[0].chargeItemID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventoryByID(this.data.chargeItemID)
      .subscribe(m => {
        this.data = m;
        this.inventoryBrandCtrl = new FormControl({inventoryBrandID: m.inventoryBrandResource.inventoryBrandID, inventoryBrandName: m.inventoryBrandResource.inventoryBrandName});
        this.inventoryGenericCtrl = new FormControl({inventoryGenericID: m.inventoryGenericResource.inventoryGenericID, inventoryGenericName: m.inventoryGenericResource.inventoryGenericName});
        this.inventoryATCClassificationCtrl = new FormControl({inventoryATCClassificationID: m.inventoryATCClassificationResource.inventoryATCClassificationID, inventoryATCClassificationName: m.inventoryATCClassificationResource.inventoryATCClassificationName});
        this.inventoryCategoryCtrl = new FormControl({inventoryCategoryID: m.inventoryCategoryResource.inventoryCategoryID, inventoryCategoryName: m.inventoryCategoryResource.inventoryCategoryName});
        this.inventorySubCategoryCtrl = new FormControl({inventorySubCategoryID: m.inventorySubCategoryResource.inventorySubCategoryID, inventorySubCategoryName: m.inventorySubCategoryResource.inventorySubCategoryName});

      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    
    this.MasterDataService.GetInventoryPregnancyCategory()
        .subscribe(x => {
          this.pregnancyCategories = x;
    });
    this.MasterDataService.GetInventoryMedicationClass()
        .subscribe(x => {
          this.medicationClasses = x;
    });
    this.MasterDataService.GetChargeItem()
        .subscribe(x => {
          this.dataList = x;
    });
    
    
    this.MasterDataService.GetInventoryBrand().subscribe(brandName => {
    this.brandNames = brandName;
    //here only start filter
    this.filteredinventoryBrands = this.inventoryBrandCtrl.valueChanges
        .startWith(this.inventoryBrandCtrl.value)
        .map(val => this.displayinventoryBrandFn(val))
        .map(name => this.filterBrandNames(name));
    });
    
    this.MasterDataService.GetInventoryGeneric().subscribe(generic => {
    this.inventoryGenerics = generic;
    //here only start filter
    this.filteredinventoryGenerics = this.inventoryGenericCtrl.valueChanges
        .startWith(this.inventoryBrandCtrl.value)
        .map(val => this.displayinventoryGenericFn(val))
        .map(name => this.filterInventoryGenerics(name));
    });
    this.MasterDataService.GetInventoryATCClassification().subscribe(atc => {
    this.inventoryATCClassifications = atc;
    //here only start filter
    this.filteredinventoryATCClassifications = this.inventoryATCClassificationCtrl.valueChanges
        .startWith(this.inventoryATCClassificationCtrl.value)
        .map(val => this.displayinventoryATCClassificationFn(val))
        .map(name => this.filterInventoryATCClassifications(name));
    });
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
  
  }

  onSave() {
    this.data.inventoryBrandID = this.inventoryBrandCtrl.value.inventoryBrandID;
    this.data.inventoryGenericID = this.inventoryGenericCtrl.value.inventoryGenericID;
    this.data.inventoryATCClassificationID = this.inventoryATCClassificationCtrl.value.inventoryATCClassificationID;
    this.data.inventoryCategoryID = this.inventoryCategoryCtrl.value.inventoryCategoryID;
    this.data.inventorySubCategoryID = this.inventorySubCategoryCtrl.value.inventorySubCategoryID;

    if (this.data.chargeItemID){
      this.MasterDataService.UpdateInventoryByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.inventoryCode + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInventory(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.inventoryCode + '" Created Sucessfully!','Info');

      });
  }

}
