import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number
  @Input() invoiceHdrID: number;

  disableSave: boolean=false;
  returnedResult: any = {};
  data: any = {laboratoryLnResource:{}};

  displayDialog: boolean;
  selectedOption: string;
  toShow: boolean = true;

  historyRecord;
  laboratoryUnit;
  doctors;
  orderedByCtrl: FormControl;
  referredByCtrl: FormControl;
  replyToCtrl: FormControl;
  reportedByCtrl: FormControl; 
  filteredOrderedBy: any;
  filteredReferredBy: any;
  filteredReplyTo: any;
  filteredReportedBy: any; 

  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  }
  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) {
    this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.referredByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.replyToCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.reportedByCtrl = new FormControl({dgUserID: 0, userFullName: ''}); 
  }
  onNew() {
    this.disableSave = false;
    this.data={laboratoryLnResource:{}};
    this.returnedResult ={};
    this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.referredByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.replyToCtrl = new FormControl({dgUserID: 0, userFullName: ''});
    this.reportedByCtrl = new FormControl({dgUserID: 0, userFullName: ''}); 
  }
    onSave() {
      //clear editing cached
      this.data.laboratoryLnResource = this.returnedResult;

      if (this.orderedByCtrl.value.dgUserID > 0) 
        this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
      if (this.referredByCtrl.value.dgUserID > 0) 
        this.data.referredByID = this.referredByCtrl.value.dgUserID;
      if (this.replyToCtrl.value.dgUserID > 0) 
        this.data.replyToID = this.replyToCtrl.value.dgUserID;
      if (this.reportedByCtrl.value.dgUserID > 0) 
        this.data.reportedByID = this.reportedByCtrl.value.dgUserID;

      this.data.patientID = this.patientID;
      this.data.visitID = this.visitID;
      this.data.invoiceHdrID = this.invoiceHdrID;
      this.data.CreatedByID = 1;

      if (this.data.laboratoryHdrID){
        this.MasterDataService.CreateLaboratoryRecord(this.data)
          .subscribe(x => {
              this.GDService.openSnackBar(x.laboratoryOrderNo + '" Updated Sucessfully!','Info');
              this.getHistory();
        }, err => {
              this.GDService.openSnackBar(err ,'Info');
        } );
      }
      else
        this.MasterDataService.CreateLaboratoryRecord(this.data)
          .subscribe(x => {
            this.GDService.openSnackBar(x.laboratoryOrderNo + '" Created Sucessfully!','Info');
            this.getHistory();
        }, err => {
              this.GDService.openSnackBar(err,'Info');
        } );
    }

  loadDatabyID(id){
    this.MasterDataService.GetLaboratoryByID(id).subscribe(hr => {
      this.data = hr;

      if (this.data.orderedByID != null)
        this.orderedByCtrl = new FormControl({dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName});
      if (this.data.referredByID != null)
        this.referredByCtrl = new FormControl({dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName});
      if (this.data.replyToID != null)
        this.replyToCtrl = new FormControl({dgUserID: hr.replyToResource.dgUserID, userFullName: hr.replyToResource.userFullName});
      if (this.data.reportedByID != null)
        this.reportedByCtrl = new FormControl({dgUserID: hr.reportedByResource.dgUserID, userFullName: hr.reportedByResource.userFullName});


      for (let modLn of hr.laboratoryLnResource)
      {
        modLn.catalog = modLn.chargeItemResource.catalog;
        modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
        modLn.analysis = modLn.chargeItemResource.analysis;
        modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
      }

      this.returnedResult = hr.laboratoryLnResource;
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
        this.filteredReportedBy = this.reportedByCtrl.valueChanges
            .startWith(this.reportedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
        });
        this.MasterDataService.GetLaboratoryUnit().subscribe(laboratoryUnit => {
          this.laboratoryUnit = laboratoryUnit;
        });
        this.getHistory();
        this.disableSave = false;

  }

  getHistory(){
    this.disableSave = true;
    this.MasterDataService.GetLaboratoryByVisit(this.visitID).subscribe(hr => {
      this.historyRecord = hr;
    });
  }

  toggleSearch() {
    let dialogRef = this.dialog.open(DialogResultLaboratorySearch, {
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
}

@Component({
  selector: 'dialog-laboratory-search',
  templateUrl: './dialog-laboratory-search.html',
})
export class DialogResultLaboratorySearch {
  dataSource: any;
  
    constructor(public dialogRef: MdDialogRef<DialogResultLaboratorySearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {
  
      this.MasterDataService.GetChargeItemListingByType("LABORATORY")
      .subscribe(x => {
        this.dataSource  = x;
      });
    }
  
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
      
    getSelectedItem() {
      this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    }

}
