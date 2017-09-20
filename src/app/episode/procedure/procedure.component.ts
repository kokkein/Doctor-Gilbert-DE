import { GDService } from './../../services/GDService.service';
import { MasterDataService } from 'app/services/masterdata.service';
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;
  
  returnedResult: any = {};
  data: any = {procedureLnResource:{}};

  displayDialog: boolean;
  selectedOption: string;
  toShow: boolean = true;

  historyRecord; 
  doctors;
  orderedByCtrl: FormControl;
  referredByCtrl: FormControl; 
  filteredOrderedBy: any;
  filteredReferredBy: any; 

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
  }
  
    onSave() {
      //clear editing cached
      this.data.procedureLnResource = this.returnedResult;

      if (this.orderedByCtrl.value.dgUserID > 0) 
        this.data.orderedByID = this.orderedByCtrl.value.dgUserID;
      if (this.referredByCtrl.value.dgUserID > 0) 
        this.data.referredByID = this.referredByCtrl.value.dgUserID; 

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

      if (this.data.orderedByID != null)
        this.orderedByCtrl = new FormControl({dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName});
      if (this.data.referredByID != null)
        this.referredByCtrl = new FormControl({dgUserID: hr.referredByResource.dgUserID, userFullName: hr.referredByResource.userFullName});
       

      for (let modLn of hr.procedureLnResource)
      {
        modLn.catalog = modLn.chargeItemResource.catalog;
        modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
        modLn.analysis = modLn.chargeItemResource.analysis;
        modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
      }

      this.returnedResult = hr.procedureLnResource;
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
        });

        this.getHistory();

  }

  getHistory(){
      this.MasterDataService.GetProcedureByVisit(this.visitID).subscribe(hr => {
        this.historyRecord = hr;
      });
  }

  toggleSearch() {
    let dialogRef = this.dialog.open(DialogResultProcedureSearch, {
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
  selector: 'dialog-procedure-search',
  templateUrl: './dialog-procedure-search.html',
})
export class DialogResultProcedureSearch {
  dataSource: any;
  
    constructor(public dialogRef: MdDialogRef<DialogResultProcedureSearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {
  
      this.MasterDataService.GetChargeItemListingByType("PROCEDURE")
      .subscribe(x => {
        this.dataSource  = x;
      });
    }
  
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
      
    getSelectedItem() {
      this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    }

}

