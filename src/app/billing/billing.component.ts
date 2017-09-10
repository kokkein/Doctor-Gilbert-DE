import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
dataHistory: any;
  constructor() { 
    this.dataHistory =[
      {"trasanctionDate":"2017-09-01", "itemCode":"BMD-001", "itemdescription":"PANADOL 500MG", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-01", "itemCode":"BMD-002", "itemdescription":"AMOXICILIN 200MG", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-01", "itemCode":"RAD-001", "itemdescription":"Radiology Test", "quantity":1, "price":500, "discount(%)":10,  "totalPrice":450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-03", "itemCode":"LAD-001", "itemdescription":"FULL BODY BLOOD ANALYSIS", "quantity":1, "price":230, "discount(%)":10,  "totalPrice":200, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR WONG LAY FAT", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-05", "itemCode":"RAD-401", "itemdescription":"CT SCAN - ABDOMINAL", "quantity":1, "price":1500, "discount(%)":10,  "totalPrice":1450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-07", "itemCode":"BMD-001", "itemdescription":"PANADOL 500MG", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-07", "itemCode":"MMD-102", "itemdescription":"ALCOHOL SWAP", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-07", "itemCode":"RAD-001", "itemdescription":"Radiology Test", "quantity":1, "price":500, "discount(%)":10,  "totalPrice":450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-07", "itemCode":"LAD-001", "itemdescription":"FULL BODY BLOOD ANALYSIS", "quantity":1, "price":230, "discount(%)":10,  "totalPrice":200, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR WONG LAY FAT", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-07", "itemCode":"RAD-501", "itemdescription":"CT SCAN - CHEST", "quantity":1, "price":1500, "discount(%)":10,  "totalPrice":1450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-08", "itemCode":"MMD-001", "itemdescription":"UPHAMOL", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-08", "itemCode":"BMD-002", "itemdescription":"AMOXICILIN 200MG", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-09", "itemCode":"RAD-001", "itemdescription":"Radiology Test", "quantity":1, "price":500, "discount(%)":10,  "totalPrice":450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-10", "itemCode":"LAD-001", "itemdescription":"FULL BODY BLOOD ANALYSIS", "quantity":1, "price":230, "discount(%)":10,  "totalPrice":200, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR WONG LAY FAT", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-11", "itemCode":"RAD-521", "itemdescription":"CT SCAN - LEG", "quantity":1, "price":1500, "discount(%)":10,  "totalPrice":1450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-12", "itemCode":"LOG-001", "itemdescription":"LONGZINE 500MG", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-14", "itemCode":"MMD-702", "itemdescription":"SYRINGE USAGE", "quantity":10, "price":0.5, "discount(%)":0,  "totalPrice":5, "GSTCode":"SR", "GSTAmount":0.30, "OrderBy":"DR ONG", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-15", "itemCode":"RAD-001", "itemdescription":"Radiology Test", "quantity":1, "price":500, "discount(%)":10,  "totalPrice":450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-15", "itemCode":"LAD-001", "itemdescription":"FULL BODY BLOOD ANALYSIS", "quantity":1, "price":230, "discount(%)":10,  "totalPrice":200, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR WONG LAY FAT", "PayBy":"CASH"},
      {"trasanctionDate":"2017-09-19", "itemCode":"RAD-205", "itemdescription":"CT SCAN - BUTT", "quantity":1, "price":1500, "discount(%)":10,  "totalPrice":1450, "GSTCode":"ES", "GSTAmount":0.00, "OrderBy":"DR LAU AH CHOY", "PayBy":"CASH"}
    ]
  }

  ngOnInit() {
  }

}
