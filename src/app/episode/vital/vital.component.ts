import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";
import { MdSnackBar } from '@angular/material';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;

  weatherData:any; 
  data: any = {};
 
  toShow: boolean = true;

  historyRecord;  

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) { 

  }
    customizeTooltip(arg: any) {
        var items = arg.valueText.split("\n"),
            color = arg.point.getColor();
        items.forEach(function(item, index) {
            if(item.indexOf(arg.seriesName) === 0) {
                items[index] = $("<b>")
                                .text(item)
                                .css("color", color)
                                .prop("outerHTML");
            }
        });
        return { text: items.join("\n") };
    }
    calculateBMI(){
        if (this.data.weight > 0 && this.data.height > 0 )
            this.data.bMI = this.data.weight / ((this.data.height/100) * 2)
    }

    onSave() { 

        this.data.patientID = this.patientID;
        this.data.visitID = this.visitID; 
        this.data.CreatedByID = 1;
    
        if (this.data.vitalSignID){
          this.MasterDataService.CreateVitalSignRecord(this.data)
            .subscribe(x => {
                this.GDService.openSnackBar('Updated Sucessfully!','Info');
                this.getHistory();
          }, err => {
                this.GDService.openSnackBar(err ,'Info');
          } );
        }
        else
          this.MasterDataService.CreateVitalSignRecord(this.data)
            .subscribe(x => {
              this.GDService.openSnackBar('Created Sucessfully!','Info');
              this.getHistory();
          }, err => {
                this.GDService.openSnackBar(err,'Info');
          } );
    }

    loadDatabyID(id){
      this.MasterDataService.GetVitalSignByID(id).subscribe(hr => {
        this.data = hr;
    
      }, err => {
        this.GDService.openSnackBar(err,'Info');
      } );
    }
    
    ngOnInit() {
        this.getHistory();
    }
    
    getHistory(){
        this.MasterDataService.GetVitalSignByVisit(this.visitID).subscribe(hr => {
          this.historyRecord = hr;
        });
    }

}