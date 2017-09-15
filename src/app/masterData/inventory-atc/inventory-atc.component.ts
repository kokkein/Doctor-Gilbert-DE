import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-atc',
  templateUrl: './inventory-atc.component.html',
  styleUrls: ['./inventory-atc.component.css']
})
export class InventoryAtcComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryATCClassificationID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryATCClassificationID = +p['id'];
        if (this.data.inventoryATCClassificationID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-atc/', event.selectedRowKeys[0].inventoryATCClassificationID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventoryATCClassificationByID(this.data.inventoryATCClassificationID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryATCClassification()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryATCClassificationID){
      this.MasterDataService.UpdateInventoryATCClassificationByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryATCClassificationCode + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreateInventoryATCClassification(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryATCClassificationCode + '" Created Sucessfully!','Close');
      });
  }

}

