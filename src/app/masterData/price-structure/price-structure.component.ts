import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterDataService } from "app/services/masterdata.service";


@Component({
  selector: 'app-price-structure',
  templateUrl: './price-structure.component.html',
  styleUrls: ['./price-structure.component.css']
})
export class PriceStructureComponent implements OnInit {

  data: any = {};
  dataList: any = []; 
  priceStructureID;

  constructor(private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) {  
    route.params.subscribe(p=>{
      if (p['id']!=null)
        this.data.priceStructureID = +p['id'];
        if (this.data.departmentID)
        {
          this.retrieveData();
        }
    });
  }

  retrieveData(){
      this.MasterDataService.GetPriceStructureByID(this.data.priceStructureID)
      .subscribe(m => {
        this.data = m;
      }, err => {
        if (err.status == 404)
         // this.msgs = [];
         // this.msgs.push({severity:'error', summary:'Info Message', detail:'Record Not Found!'});
          this.data = {};
      } );
  }

  ngOnInit() {
    this.data.active = true;
      this.MasterDataService.GetPriceStructure()
        .subscribe(x => {
          this.dataList =x;
     });
  }

  onSave() {

    if (this.data.priceStructureID){
      this.MasterDataService.UpdatePriceStructureByID(this.data)
        .subscribe(x => {
           // this.msgs = [];
           // this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.priceStructureName + '" Updated Sucessfully!'});
      });
    }
    else
      this.MasterDataService.CreatePriceStructure(this.data)
        .subscribe(x => {
         //   this.msgs = [];
         //   this.msgs.push({severity:'success', summary:'Info Message', detail:'"' + x.priceStructureName + '" Created Sucessfully!'});
      });
  }

}
