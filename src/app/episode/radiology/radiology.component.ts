import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { RadiologyList } from './RadiologyList.interface';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;

  disableSave: boolean=false;
  returnedResult: any = {};
  data: any = {radiologyLnResource:{}};

  displayDialog: boolean;
  selectedOption: string;
  toShow: boolean = true;

  historyRecord:any;
  modalities;
  doctors;
  orderedByCtrl: FormControl;
  referredByCtrl: FormControl;
  replyToCtrl: FormControl;
  reportedByCtrl: FormControl;
  radiologistCtrl: FormControl;
  filteredOrderedBy: any;
  filteredReferredBy: any;
  filteredReplyTo: any;
  filteredReportedBy: any;
  filteredRadiologist: any;

  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  }
  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
    this.resetForm();
  }
  
  resetForm(){
    this.data ={};
    this.returnedResult={};
    this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.referredByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.replyToCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.reportedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.radiologistCtrl = new FormControl({dgUserID: 0, userFullName: ''});
  }

  onNew() {
    this.disableSave = false;
    this.resetForm();
  }
  onSave() {
    //clear editing cached
    this.data.radiologyLnResource = this.returnedResult;
    
    if (this.orderedByCtrl.value.dgUserID > 0) 
      this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
    if (this.referredByCtrl.value.dgUserID > 0) 
      this.data.referredByID = this.referredByCtrl.value.dgUserID;
    if (this.replyToCtrl.value.dgUserID > 0) 
      this.data.replyToID = this.replyToCtrl.value.dgUserID;
    if (this.reportedByCtrl.value.dgUserID > 0) 
      this.data.reportedByID = this.reportedByCtrl.value.dgUserID;
    if (this.radiologistCtrl.value.dgUserID > 0) 
      this.data.radiologistID = this.radiologistCtrl.value.dgUserID;
    this.data.patientID = this.patientID;
    this.data.visitID = this.visitID;
    this.data.invoiceHdrID = this.invoiceHdrID;
    this.data.CreatedByID = 1;

    if (this.data.radiologyHdrID){
      this.MasterDataService.CreateRadiologyRecord(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar(x.radiologyOrderNo + '" Updated Sucessfully!','Info');
            this.getHistory(); 
      }, err => {
            this.GDService.openSnackBar(err ,'Info');
      } );
    }
    else
      this.MasterDataService.CreateRadiologyRecord(this.data)
        .subscribe(x => {
          this.GDService.openSnackBar(x.radiologyOrderNo + '" Created Sucessfully!','Info');
          this.getHistory(); 
      }, err => {
            this.GDService.openSnackBar(err,'Info');
      } );
  }

  loadDatabyID(id){
    this.MasterDataService.GetRadiologyByID(id).subscribe(hr => {
      this.data = hr;
      if (this.data.orderedByID != null)
        this.orderedByCtrl = new FormControl({dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName});
      if (this.data.referredByID != null)
        this.referredByCtrl = new FormControl({dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName});
      if (this.data.replyToID != null)
        this.replyToCtrl = new FormControl({dgUserID: hr.replyToResource.dgUserID, userFullName: hr.replyToResource.userFullName});
      if (this.data.reportedByID != null)
        this.reportedByCtrl = new FormControl({dgUserID: hr.reportedByResource.dgUserID, userFullName: hr.reportedByResource.userFullName});
      if (this.data.radiologistID != null)
        this.radiologistCtrl = new FormControl({dgUserID: hr.radiologistResource.dgUserID, userFullName: hr.radiologistResource.userFullName});


      for (let modLn of hr.radiologyLnResource)
      {
        modLn.catalog = modLn.chargeItemResource.catalog;
        modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
        modLn.analysis = modLn.chargeItemResource.analysis;
        modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
      }

      this.returnedResult = hr.radiologyLnResource;
      this.disableSave = false;
    }, err => {
      this.GDService.openSnackBar(err,'Info');
    } );
  }

  ngOnInit() {

      this.MasterDataService.GetDGUser().subscribe(doctor => {
        this.doctors = doctor;
        this.filteredOrderedBy = this.orderedByCtrl.valueChanges
            .startWith(this.orderedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReferredBy = this.referredByCtrl.valueChanges
            .startWith(this.referredByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReplyTo = this.replyToCtrl.valueChanges
            .startWith(this.replyToCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredRadiologist = this.radiologistCtrl.valueChanges
            .startWith(this.radiologistCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        this.filteredReportedBy = this.reportedByCtrl.valueChanges
            .startWith(this.reportedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        });
        this.MasterDataService.GetModality().subscribe(modality => {
          this.modalities = modality;
        });
        this.getHistory();
        this.disableSave = false;
  }

  getHistory(){
    this.disableSave = true;
      this.MasterDataService.GetRadiologyByVisit(this.visitID).subscribe(hr => {
        this.historyRecord = hr;
      });
  }

  toggleSearch() {
    let dialogRef = this.dialog.open(DialogResultRadiologySearch, {
      height: '650px',
      width: '900px',
      data: {
        refdata: this.returnedResult
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.returnedResult = result;
    });

  }
  
  priorities = ['Urgent','Stat','Routine'];
  lateralities = [{value: 'LEFT', viewValue: 'LEFT'},{value: 'RIGHT', viewValue: 'RIGHT'},{value: 'BILATERAL', viewValue: 'BILATERAL'}];

}

@Component({
  selector: 'dialog-radiology-search',
  templateUrl: './dialog-radiology-search.html',
})
export class DialogResultRadiologySearch {
  dataSource: any;

  constructor(public dialogRef: MdDialogRef<DialogResultRadiologySearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {

    this.MasterDataService.GetChargeItemListingByType("RADIOLOGY")
    .subscribe(x => {
      this.dataSource  = x;
    });
  }

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
    
  getSelectedItem() {
    this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
  }


}
