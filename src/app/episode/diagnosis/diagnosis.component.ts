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
      
        this.diagnosisCtrl = new FormControl({diagnosisID: 0, diagnosisCode: ''});
        
  }
  onNew() {
    this.disableSave = false;
    this.data={};
  }
  onSave() {
    //clear editing cached

    if (this.diagnosisCtrl.value.dgUserID > 0) 
      this.data.diagnosisID = this.diagnosisCtrl.value.diagnosisID;

    this.data.patientID = this.patientID;
    this.data.visitID = this.visitID;
    this.data.invoiceHdrID = this.invoiceHdrID;
    this.data.CreatedByID = 1;

    if (this.data.procedureHdrID){
      this.MasterDataService.CreateProcedureRecord(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar(x.procedureOrderNo + '" Updated Sucessfully!','Info');
            this.getHistory();
      }, err => {
            this.GDService.openSnackBar(err ,'Info');
      } );
    }
    else
      this.MasterDataService.CreateProcedureRecord(this.data)
        .subscribe(x => {
          this.GDService.openSnackBar(x.procedureOrderNo + '" Created Sucessfully!','Info');
          this.getHistory();
      }, err => {
            this.GDService.openSnackBar(err,'Info');
      } );
  }
  loadDatabyID(id){
    this.MasterDataService.GetProcedureByID(id).subscribe(hr => {
      this.data = hr;

      if (this.data.diagnosisCtrl != null)
        this.diagnosisCtrl = new FormControl({diagnosisID: hr.orderedByResource.dgUserID, diagnosisCode: hr.orderedByResource.userFullName});

      this.disableSave = false;
    }, err => {
      this.GDService.openSnackBar(err,'Info');
    } );
  }
  ngOnInit() {
    this.diagnosisCtrl = new FormControl({diagnosisID: 0, diagnosisCode: ''});
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
    this.MasterDataService.GetProcedureByVisit(this.visitID).subscribe(hr => {
      this.historyRecord = hr;
    });
  }

  diagnosisRecord = [
    {
      diagnosisCode: 'A203',
      diagnosisDesc: 'Ear, Eye and Throat',
      Note: 'Patient complaint very painful at the ear, but overall is working well and can certainly sleep very well as night... this is an extreme long text and how it will be display?',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
  ];

  diagnosisTypes = [
    {
      diagnosisTypeID: 1,
      diagnosisTypeDesc: 'Provisional',
    },
    {
      diagnosisTypeID: 2,
      diagnosisTypeDesc: 'Differential',
    },
    {
      diagnosisTypeID: 3,
      diagnosisTypeDesc: 'Provisional',
    },
  ];

  displayDiagnosisFn(value: any): string {
    return value && typeof value === 'object' ? value.diagnosisCode : value;
  }
  filterDiagnosis(val: string) {
    return val ? this.diagnosis.filter((s) => new RegExp(val, 'gi').test(s.diagnosisCode))
    : this.diagnosis;
  }
 
}
