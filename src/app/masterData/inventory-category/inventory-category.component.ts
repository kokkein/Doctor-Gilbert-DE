import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-category',
  templateUrl: './inventory-category.component.html',
  styleUrls: ['./inventory-category.component.css']
})
export class InventoryCategoryComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryCategoryID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryCategoryID = +p['id'];
        if (this.data.inventoryCategoryID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-category/', event.selectedRowKeys[0].inventoryCategoryID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventoryCategoryByID(this.data.inventoryCategoryID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryCategory()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryCategoryID){
      this.MasterDataService.UpdateInventoryCategoryByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryCategoryName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInventoryCategory(this.data)
        .subscribe(x => { 
          this.GDService.openSnackBar('"' + x.inventoryCategoryName + '" Created Sucessfully!','Info');
      });
  }

}
