import { MasterDataService } from 'app/services/masterdata.service';
 
import { FormControl, Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { MedicationList } from './MedicationList.interface';

import { MdChipInputEvent, ENTER } from '@angular/material';
import { GDService } from './../../services/GDService.service'; 
import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core'; 
import { AnimationTransitionEvent, ViewEncapsulation, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { DxDataGridComponent } from "devextreme-angular";

export interface Medication {
  name: string;
}

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number;
  @Input() invoiceHdrID: number;

  historyRecord:any;
  returnedResult: any = {};
  data: any = {medicationLnResource:{}};
  stockLocking: any = {};
  medicationCtrl: FormControl;
  filteredMedications: any;
  medicationTemplateCtrl: FormControl;
  filteredMedicationTemplates: any;
  filteredOrderedBy: any;
  doctors;
  uoms;
  orderedByCtrl: FormControl;
  displayDrug;
  medications: any[] = [];
  public myForm: FormGroup; // our form model
    
  visible: boolean = true;
  color: string = '';
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  message: string = '';
  
  calculateQty(index){
    const control = <FormArray>this.myForm.controls['medicationLnResource'];
    const cc = control.at(index);
    
    if (cc.get("take").value && cc.get("day").value && cc.get("time").value){
      (<FormArray>this.myForm.controls['medicationLnResource']).at(index).patchValue({
        totalQuantity: cc.get("take").value * cc.get("day").value * cc.get("time").value});

      //Locking the stock to prevent over issue
      this.stockLocking.ChargeItemID = cc.get("chargeItemID").value;
      this.stockLocking.Quantity = cc.get("take").value * cc.get("day").value * cc.get("time").value;
      
      if (!cc.get("stockLockingID").value)
      {
        //console.log("to create");
        this.MasterDataService.CreateStockLocking(this.stockLocking)
          .subscribe(x => {
            (<FormArray>this.myForm.controls['medicationLnResource']).at(index).patchValue({
              stockLockingID: x.stockLockingID});
          }, err => {
                this.GDService.openSnackBar(err ,'Info');
          } );
      }
      else
      {
        //console.log("to update");
        this.stockLocking.StockLockingID = cc.get("stockLockingID").value;
        this.MasterDataService.UpdateStockLockingByID(this.stockLocking)
        .subscribe(x => {
          (<FormArray>this.myForm.controls['medicationLnResource']).at(index).patchValue({
            stockLockingID: x.stockLockingID});
        }, err => {
              this.GDService.openSnackBar(err ,'Info');
        } );
      }

    }
 
  }
  calculatePrice(index){
    const control = <FormArray>this.myForm.controls['medicationLnResource'];
    const cc = control.at(index);
    
    if (cc.get("totalQuantity").value && cc.get("originalPrice").value)
      (<FormArray>this.myForm.controls['medicationLnResource']).at(index).patchValue({
        billPrice: cc.get("totalQuantity").value * cc.get("originalPrice").value
      });
  }

  addMedication(event) {
    // add Medication to the list
    const control = <FormArray>this.myForm.controls['medicationLnResource'];

    this.MasterDataService.GetQRStockBalanceByID(event.source.value.chargeItemID)
      .subscribe(res => { 
          control.push(this.initMedication(event.source.value.chargeItemID, event.source.value.chargeItemCode + ', ' +event.source.value.chargeItemDescription, res.totalRemainingQuantity)); 
       }, err => {
          control.push(this.initMedication(event.source.value.chargeItemID, event.source.value.chargeItemCode + ', ' +event.source.value.chargeItemDescription, 0)); 
      }); 

  }
    
  removeMedication(i: number) {
  // remove Medication from the list
  const control = <FormArray>this.myForm.controls['medicationLnResource'];
  control.removeAt(i);
  }

  displayMedicationFn(value: any): string {
    return value && typeof value === 'object' ? value.chargeItemDescription : value;
  }

  constructor(private _fb: FormBuilder, private GDService: GDService, private MasterDataService: MasterDataService, private _element: ElementRef, public dialog: MdDialog, private router: Router) { 

        this.medicationCtrl = new FormControl({chargeItemCode: 0, chargeItemDescription: ''});

        this.medicationTemplateCtrl = new FormControl();
        this.filteredMedicationTemplates = this.medicationTemplateCtrl.valueChanges
        .startWith(null)
        .map(val => this.displayMedicationFn(val))
        .map(name => this.filterMedicationTemplate(name));

        this.orderedByCtrl = new FormControl({dgUserID: 0, userFullName: ''});
  }

  onSave() {
    //clear editing cached
    this.data.medicationLnResource = this.myForm.value.medicationLnResource;
    
    if (this.orderedByCtrl.value.dgUserID > 0) 
      this.data.orderedByID = this.orderedByCtrl.value.dgUserID; 

    this.data.patientID = this.patientID;
    this.data.visitID = this.visitID;
    this.data.invoiceHdrID = this.invoiceHdrID;
    this.data.CreatedByID = 1;

    if (this.data.medicationHdrID){
      this.MasterDataService.CreateMedicationRecord(this.data)
        .subscribe(x => {
            this.GDService.openSnackBar(x.medicationOrderNo + '" Updated Sucessfully!','Info');
            this.getHistory(); 
      }, err => {
            this.GDService.openSnackBar(err ,'Info');
      } );
    }
    else
      this.MasterDataService.CreateMedicationRecord(this.data)
        .subscribe(x => {
          this.GDService.openSnackBar(x.medicationOrderNo + '" Created Sucessfully!','Info');
          this.getHistory(); 
      }, err => {
            this.GDService.openSnackBar(err,'Info');
      } );
  }

  loadDatabyID(id){
    this.MasterDataService.GetMedicationByID(id).subscribe(hr => {
      this.data = hr;
      if (this.data.orderedByID != null)
        this.orderedByCtrl = new FormControl({dgUserID: hr.orderedByResource.dgUserID, userFullName: hr.orderedByResource.userFullName});

      for (let modLn of hr.medicationLnResource)
      {
        modLn.catalog = modLn.chargeItemResource.catalog;
        modLn.chargeItemCode = modLn.chargeItemResource.chargeItemCode;
        modLn.analysis = modLn.chargeItemResource.analysis;
        modLn.chargeItemDescription = modLn.chargeItemResource.chargeItemDescription;
      }

      this.returnedResult = hr.medicationLnResource;
    }, err => {
      this.GDService.openSnackBar(err,'Info');
    } );
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      medicationLnResource: this._fb.array([
              //this.initMedication(),
          ])
      });

      this.MasterDataService.GetDGUser().subscribe(doctor => {
        this.doctors = doctor;
        this.filteredOrderedBy = this.orderedByCtrl.valueChanges
            .startWith(this.orderedByCtrl.value)
            .map(val => this.displayDoctorFn(val))
            .map(name => this.filterDoctors(name));
      });

      this.MasterDataService.GetInventoryUOM().subscribe(uom => {
        this.uoms =uom;
  
      });

      this.medicationCtrl = new FormControl({chargeItemCode: 0, chargeItemDescription: ''});
      this.filteredMedications = this.medicationCtrl.valueChanges
      .debounceTime(400)
      .do(value => {

         this.MasterDataService.GetMedicationBySearch(value).subscribe(res => { 
             this.medications = res; 
        }); 
       }).delay(500).map(() => this.medications);

       this.getHistory();
  }

  getHistory(){
    this.MasterDataService.GetMedicationByVisit(this.visitID).subscribe(hr => {
      this.historyRecord = hr;

    });
  }

  initMedication(chargeItemID: number, drugName: string, availQty: number) {
    // initialize our Medication
    return this._fb.group({
        chargeItemID: [chargeItemID],  // required field
        stockLockingID: [''],
        drugCode:[''],
        drugName: [drugName],
        dosage: [''],
        take: [''],
        time: [''],
        day: [''],
        totalQuantity: [''],
        inventoryUOMID: [''],
        originalPrice: [''],
        discountPerc: [''],
        discountAmount: [''],
        billPrice: [''],
        route: [''],
        whenNecessary: [false],
        instruction1: [''],
        instruction2: [''],
        indication: [''],
        availQty: [availQty],
    });
}



update(e) {
  //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key)));
}
insert(e) {
  //console.log(e.component.columnOption("dosage").calculateCellValue(e.data));
}
calculate(e) {
  if(!e.dosage)
      return null;
  
  return e.dosage + e.dosage;
}
calTotalQTY(e) {
  if(!e.take || !e.time || !e.day)
      return null;
  
  return e.take * e.time * e.day;
}
calTotalPrice(e) { 
  //console.log(e.component.getRowIndexByKey(e.key));
  if(!e.totalQuantity || !e.originalPrice)
      return null; 
  //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "totalQuantity"));
  //console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "originalPrice"));

  return e.totalQuantity * e.originalPrice;
}

toggleSearch() {
  let dialogRef = this.dialog.open(DialogResultMedicationSearch, {
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

  routes = [
    {value: 'ORAL', viewValue: 'ORAL'},
    {value: 'MOUTH', viewValue: 'MOUTH'},
    {value: 'EXTERNAL', viewValue: 'EXTERNAL'},
    {value: 'ASS', viewValue: 'ASS'},
  ];

  medicationTemplates = [
    'TEMP001 - URTI',
    'TEMP002 - High Fever',
    'TEMP003 - Dizzy',
    ];


 

  filterMedication(val: string) {
    return val ? this.medications.filter((s) => new RegExp(val, 'gi').test(s)) : this.medications;
  }

  filterMedicationTemplate(val: string) {
    return val ? this.medicationTemplates.filter((s) => new RegExp(val, 'gi').test(s)) : this.medicationTemplates;
  }

  displayDoctorFn(value: any): string {
    return value && typeof value === 'object' ? value.userFullName : value;
  }
  filterDoctors(val: string) {
    //`^${val}`
    return val ? this.doctors.filter((s) => new RegExp(val, 'gi').test(s.userFullName))
               : this.doctors;
  }

    // Enter, comma, semi-colon
    separatorKeysCodes = [ENTER, 188, 186];
    medicationList: Medication[] = [];

    
    displayMessage(message: string): void {
      this.message = message;
    }
  
    add(event: MdChipInputEvent): void {
      let input = event.input;
      let value = event.value;
  
      if ((value || '').trim()) {
        this.medicationList.push({ name: value.trim() });
      }
  
      if (input) {
        input.value = '';
      }
    }
  
    remove(medication: Medication): void {
      let index = this.medicationList.indexOf(medication);
  
      if (index >= 0) {
        this.medicationList.splice(index, 1);
        this.removeMedication(index);
      }
    }
}

@Component({
  selector: 'dialog-medication-search',
  templateUrl: './dialog-medication-search.html',
})
export class DialogResultMedicationSearch {
  dataSource: any;
  
    constructor(public dialogRef: MdDialogRef<DialogResultMedicationSearch>, private MasterDataService: MasterDataService, @Inject(MD_DIALOG_DATA) public data: any) {
  
      this.MasterDataService.GetChargeItemListingByType("DRUG")
      .subscribe(x => {
        this.dataSource  = x;
      });
    }
  
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
      
    getSelectedItem() {
      this.data.returnedResult = this.dataGrid.instance.getSelectedRowKeys();
    }

}