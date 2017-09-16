import { GDService } from './../../services/GDService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";

@Component({
  selector: 'app-inventory-pregnancycategory',
  templateUrl: './inventory-pregnancycategory.component.html',
  styleUrls: ['./inventory-pregnancycategory.component.css']
})
export class InventoryPregnancycategoryComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  inventoryPregnancyCategoryID;

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.inventoryPregnancyCategoryID = +p['id'];
        if (this.data.inventoryPregnancyCategoryID)
        {
          this.retrieveData();
        }
    });
  }
  onRowSelect(event) {
    this.router.navigate(['/inventory-pregnancycategory/', event.selectedRowKeys[0].inventoryPregnancyCategoryID]);
  }
  retrieveData(){
      this.MasterDataService.GetInventoryPregnancyCategoryByID(this.data.inventoryPregnancyCategoryID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
            this.GDService.openSnackBar('Record Not Found!','Close');
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetInventoryPregnancyCategory()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.inventoryPregnancyCategoryID){
      this.MasterDataService.UpdateInventoryPregnancyCategoryByID(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryPregnancyCategoryName + '" Updated Sucessfully!','Close');
      });
    }
    else
      this.MasterDataService.CreateInventoryPregnancyCategory(this.data)
        .subscribe(x => { 
            this.GDService.openSnackBar('"' + x.inventoryPregnancyCategoryName + '" Created Sucessfully!','Close');
      });
  }

}

