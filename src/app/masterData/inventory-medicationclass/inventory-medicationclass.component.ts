import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-medicationclass',
  templateUrl: './inventory-medicationclass.component.html',
  styleUrls: ['./inventory-medicationclass.component.css']
})
export class InventoryMedicationclassComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryGenericID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryMedicationClassID = +p['id'];
        if (this.data.inventoryMedicationClassID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-medicationclass/', event.selectedRowKeys[0].inventoryMedicationClassID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventoryMedicationClassByID(this.data.inventoryMedicationClassID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
          this.GDService.openSnackBar('Record Not Found!','Info');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryMedicationClass()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryMedicationClassID){
      this.MasterDataService.UpdateInventoryMedicationClassByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryMedicationClassName + '" Updated Sucessfully!','Info');
      });
    }
    else
      this.MasterDataService.CreateInventoryMedicationClass(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryMedicationClassName + '" Created Sucessfully!','Info');
      });
  }

}
