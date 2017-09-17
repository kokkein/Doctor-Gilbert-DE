import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-generic',
  templateUrl: './inventory-generic.component.html',
  styleUrls: ['./inventory-generic.component.css']
})
export class InventoryGenericComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryGenericID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryGenericID = +p['id'];
        if (this.data.inventoryGenericID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetInventoryGenericByID(this.data.inventoryGenericID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryGeneric()
        .subscribe(x => {
          this.dataList =x;
     });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-generic/', event.selectedRowKeys[0].inventoryGenericID]);
  }
  onSave() {

    if (this.data.inventoryGenericID){
      this.MasterDataService.UpdateInventoryGenericByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryGenericName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInventoryGeneric(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryGenericName + '" Created Sucessfully!','Info');
      });
  }

}
