import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  menuItemsOne = [
    {name: 'Payor', overview: '/payor', newRecord: '/payor'},
    {name: 'Department', overview: '/department', newRecord: '/department'},
    {name: 'MOH Visit Type', overview: '/mohvisit-type', newRecord: '/mohvisit-type'},
    {name: 'Purpose Of Visit', overview: '/purpose-of-visit', newRecord: '/purpose-of-visit'},
    {name: 'User', overview: '/user', newRecord: '/user'},
    {name: 'User Profile', overview: '/profile', newRecord: '/profile'},
    {name: 'Price Structure', overview: '/price-structure', newRecord: '/price-structure'},
    {name: 'Speciality', overview: '/speciality', newRecord: '/speciality'},
    {name: 'Insurance', overview: '/insurance', newRecord: '/insurance'},
    {name: 'Diagnosis', overview: '/Diagnosis-master', newRecord: '/Diagnosis-master'}
  ];

  menuItemsTwo = [
    {name: 'Charge Item', overview: '/charge-item', newRecord: '/charge-item'},
    {name: 'Inventory ATC', overview: '/inventory-atc', newRecord: '/inventory-atc'},
    {name: 'Inventory Brand', overview: '/inventory-brand', newRecord: '/inventory-brand'},
    {name: 'Inventory Category', overview: '/inventory-category', newRecord: '/inventory-category'},
    {name: 'Inventory Subcategory', overview: '/inventory-subcategory', newRecord: '/inventory-subcategory'},
    {name: 'Inventory Generic', overview: '/inventory-generic', newRecord: '/inventory-generic'},
    {name: 'Inventory Medication Class', overview: '/inventory-medicationclass', newRecord: '/inventory-medicationclass'},
    {name: 'Inventory Pregnancy Category', overview: '/inventory-pregnancycategory', newRecord: '/inventory-pregnancycategory'},
    {name: 'Inventory Price Structure', overview: '/inventory-price-structure', newRecord: '/inventory-price-structure'}
  ];

  constructor() { }

    ngOnInit() {
    }

}
