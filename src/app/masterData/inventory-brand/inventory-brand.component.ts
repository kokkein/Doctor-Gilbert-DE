import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-brand',
  templateUrl: './inventory-brand.component.html',
  styleUrls: ['./inventory-brand.component.css']
})
export class InventoryBrandComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryBrandID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryBrandID = +p['id'];
        if (this.data.inventoryBrandID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryBrandByID(this.data.inventoryBrandID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryBrand()
        .subscribe(x => {
          this.dataList =x;
     });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-brand/', event.selectedRowKeys[0].inventoryBrandID]);
  }
  onSave() {

    if (this.data.inventoryBrandID){
      this.MasterDataService.UpdateInventoryBrandByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.inventoryBrandName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreateInventoryBrand(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar('"' + x.inventoryBrandName + '" Created Sucessfully!','Close');
      });
  }

}
