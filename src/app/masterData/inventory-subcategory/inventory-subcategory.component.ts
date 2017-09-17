import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-subcategory',
  templateUrl: './inventory-subcategory.component.html',
  styleUrls: ['./inventory-subcategory.component.css']
})
export class InventorySubcategoryComponent implements OnInit {

  data: any = {};
  dataList: any = [];
  msgs: Message[] = [];
  inventorySubCategoryID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventorySubCategoryID = +p['id'];
        if (this.data.inventorySubCategoryID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-subcategory/', event.selectedRowKeys[0].inventorySubCategoryID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventorySubCategoryByID(this.data.inventorySubCategoryID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventorySubCategory()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventorySubCategoryID){
      this.MasterDataService.UpdateInventorySubCategoryByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventorySubCategoryName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInventorySubCategory(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventorySubCategoryName + '" Created Sucessfully!','Info');
      });
  }

}
