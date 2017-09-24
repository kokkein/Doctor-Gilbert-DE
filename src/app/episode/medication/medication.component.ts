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

  returnedResult: any = {};
  data: any = {};
  medicationCtrl: FormControl;
  filteredMedications: any;
  medicationTemplateCtrl: FormControl;
  filteredMedicationTemplates: any;
  filteredOrderedBy: any;
  doctors;
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
    const control = <FormArray>this.myForm.controls['prescribeList'];
    const cc = control.at(index);
    
    if (cc.get("take").value && cc.get("day").value && cc.get("time").value)
      (<FormArray>this.myForm.controls['prescribeList']).at(index).patchValue({
        totalQty: cc.get("take").value * cc.get("day").value * cc.get("time").value
      });
 
    //console.log((<FormArray>this.myForm.controls['prescribeList']).at(0).discAmt.value);
  }
  calculatePrice(index){
    const control = <FormArray>this.myForm.controls['prescribeList'];
    const cc = control.at(index);
    
    if (cc.get("totalQty").value && cc.get("price").value)
      (<FormArray>this.myForm.controls['prescribeList']).at(index).patchValue({
        totalPrice: cc.get("totalQty").value * cc.get("price").value
      });
  }

  addMedication(event) {
    // add Medication to the list
    const control = <FormArray>this.myForm.controls['prescribeList'];

    this.MasterDataService.GetQRStockBalanceByID(event.source.value.chargeItemID)
      .subscribe(res => { 
          control.push(this.initMedication(event.source.value.chargeItemCode + ', ' +event.source.value.chargeItemDescription, res.totalRemainingQuantity)); 
       }, err => {
          control.push(this.initMedication(event.source.value.chargeItemCode + ', ' +event.source.value.chargeItemDescription, 0)); 
      }); 

    
    }
    
    removeMedication(i: number) {
    // remove Medication from the list
    const control = <FormArray>this.myForm.controls['prescribeList'];
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
  save(model: MedicationList) {
    // call API to save customer
      console.log(model);
  }
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      prescribeList: this._fb.array([
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

      this.medicationCtrl = new FormControl({chargeItemCode: 0, chargeItemDescription: ''});
      this.filteredMedications = this.medicationCtrl.valueChanges
      .debounceTime(400)
      .do(value => {

         this.MasterDataService.GetMedicationBySearch(value).subscribe(res => { 
             this.medications = res; 
        }); 
       }).delay(500).map(() => this.medications);
  }

  initMedication(drugName: string, availQty: number) {
    // initialize our Medication
    return this._fb.group({
        drugCode:[''],
        drugName: [drugName],
        dosage: [''],
        take: [''],
        time: [''],
        day: [''],
        totalQty: [''],
        uom: [''],
        price: [''],
        discPerc: [''],
        discAmt: [''],
        totalPrice: [''],
        route: [''],
        necessary: [''],
        instructionOne: [''],
        instructionTwo: [''],
        indication: [''],
        availQty: [availQty],
    });
}



update(e) {
  console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key)));
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
  if(!e.totalQty || !e.price)
      return null; 
  console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "totalQty"));
  console.log(e.component.cellValue(e.component.getRowIndexByKey(e.key), "price"));

  return e.totalQty * e.price;
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
  uoms = [
    {value: 'TAB', viewValue: 'TAB'},
    {value: 'ML', viewValue: 'ML'},
    {value: 'Box', viewValue: 'Box'},
    {value: 'Saches', viewValue: 'Saches'},
  ];

  routes = [
    {value: 'ORAL', viewValue: 'ORAL'},
    {value: 'MOUTH', viewValue: 'MOUTH'},
    {value: 'EXTERNAL', viewValue: 'EXTERNAL'},
    {value: 'ASS', viewValue: 'ASS'},
  ];

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
    {
      diagnosisCode: 'A803',
      diagnosisDesc: 'URTI',
      Note: 'Serious flu since 3 week ago...',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 1,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
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

  medicationTemplates = [
    'TEMP001 - URTI',
    'TEMP002 - High Fever',
    'TEMP003 - Dizzy',
    ];


  medicationRecord = [
    {
      id: 'PRESC-0003',
      medicationCode: 'MED002 - Uphamol 650 TAB 500mg(Paracetamol)',
      uom: 'PIECE',
      dosage: '1x2x3',
      dosageLabel: 'take 1 tables 3 times a days for 7 days via Rectal',
      route: 'Rectal',
      take: '1',
      time: '2',
      numberOfDay: '5',
      totalQty: '15',
      instruction1: 'Take after food',
      instruction2: 'Take more if required',
      indication: 'take all in one shoot',
      price: 'RM1.00',
      totalPrice: 'RM500.00',
      discount: 'RM10.00',
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'PRESC-0004',
      medicationCode: 'MED003 - Panadol 500mg (PARACEPTAMOL)',
      uom: 'PIECE',
      dosage: '2x2x3',
      dosageLabel: 'take 2 tables 3 times a days for 7 days via Oral',
      route: 'Oral',
      take: '2',
      time: '2',
      numberOfDay: '7',
      totalQty: '12',
      instruction1: 'Take after food',
      instruction2: '',
      indication: '',
      price: 'RM0.50',
      totalPrice: 'RM50.00',
      discount: 'RM10.00',
      note: '',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
    {
      id: 'PRESC-0008',
      medicationCode: 'MED008 - Syrup',
      uom: '100ml',
      dosage: '1x2x3',
      dosageLabel: 'take 1 tables 3 times a days for 7 days via Oral',
      route: 'Oral',
      take: '1',
      time: '2',
      numberOfDay: '5',
      totalQty: '15',
      instruction1: 'Take after food',
      instruction2: 'Take more if required',
      indication: 'take all in one shoot',
      price: 'RM1.00',
      totalPrice: 'RM500.00',
      discount: 'RM10.00',
      note: 'This is a dangerous drug, take more to get more dangerous. take less also dangerous.',
      orderBy: 'Doctor Gilbert Chin',
      created: new Date('1/1/16'),
      createdBy: 'Doctor Gilbert',
      version: 2,
      updated: new Date('1/1/16'),
      updatedBy: 'Doctor Chin',
    },
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