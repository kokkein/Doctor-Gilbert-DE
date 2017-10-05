import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs/Observable'; 
import { MasterDataService } from "app/services/masterdata.service";
import 'rxjs/add/operator/startWith';
import ArrayStore from 'devextreme/data/array_store'; 

import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';  
import { GDService } from './../../services/GDService.service'; 
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core'; 
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';  

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
    @Input() patientID: number;
    @Input() visitID: number;
    @Input() invoiceHdrID: number;

    disableSave: boolean=false; 
    data: any = {};
    diagnosisCtrl: FormControl;
    filteredDiagnosis: Observable<any[]>;
    diagnosis: any[] = [];
    filteredData: Observable<any[]>; // async pipe needs to be an Observable
    myContent: any[] = [];
    diagnosisTypeData: any;
    historyRecord; 

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) { 
      
        this.diagnosisCtrl = new FormControl({diagnosisID: 0, diagnosisDescription: ''});
        
  }
  onNew() {
    this.disableSave = false;
    this.data={};
  }
  onSave() {
    //clear editing cached

    if (this.diagnosisCtrl.value.diagnosisID > 0) 
      this.data.diagnosisID = this.diagnosisCtrl.value.diagnosisID;

    this.data.patientID = this.patientID;
    this.data.visitID = this.visitID;
    this.data.invoiceHdrID = this.invoiceHdrID;
    this.data.CreatedByID = 1;

    if (this.data.diagnosisLnID){
      this.MasterDataService.UpdateDiagnosisRecordByID(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar(x.diagnosisEntryNo + '" Updated Sucessfully!','Info');
            this.getHistory();
      }, err => {
            this.GDService.openSnackBar(err ,'Info');
      } );
    }
    else
      this.MasterDataService.CreateDiagnosisLn(this.data)
        .subscribe(x => {
          this.GDService.openSnackBar(x.diagnosisEntryNo + '" Created Sucessfully!','Info');
          this.getHistory();
      }, err => {
            this.GDService.openSnackBar(err,'Info');
      } );
  }
  loadDatabyID(id){
    this.MasterDataService.GetDiagnosisLnByID(id).subscribe(hr => {
      this.data = hr;

      this.diagnosisCtrl = new FormControl({diagnosisID: hr.diagnosisResource.diagnosisID, diagnosisDescription: hr.diagnosisResource.diagnosisDescription});

      this.disableSave = false;
    }, err => {
      this.GDService.openSnackBar(err,'Info');
    } );
  }
  ngOnInit() {
    this.diagnosisCtrl = new FormControl({diagnosisID: 0, diagnosisDescription: ''});
      this.filteredDiagnosis = this.diagnosisCtrl.valueChanges
      .debounceTime(400)
      .do(value => {

         this.MasterDataService.GetDiagnosisBySearch(value).subscribe(res => { this.diagnosis = res; 

        }); 
     }).delay(500).map(() => this.diagnosis);

     this.getHistory();
     this.disableSave = false;
     
  }
  getHistory(){
    this.disableSave = true;
    this.MasterDataService.GetDiagnosisLnByVisit(this.visitID).subscribe(hr => {
      this.historyRecord = hr;
    });
  }

  diagnosisTypes = [
    {
      diagnosisTypeID: 'Provisional',
      diagnosisTypeDesc: 'Provisional',
    },
    {
      diagnosisTypeID: 'Differential',
      diagnosisTypeDesc: 'Differential',
    },
    {
      diagnosisTypeID: 'Confirmed',
      diagnosisTypeDesc: 'Confirmed',
    },
  ];

  displayDiagnosisFn(value: any): string {
    return value && typeof value === 'object' ? value.diagnosisDescription : value;
  }
  filterDiagnosis(val: string) {
    return val ? this.diagnosis.filter((s) => new RegExp(val, 'gi').test(s.diagnosisCode))
    : this.diagnosis;
  }
 
}
