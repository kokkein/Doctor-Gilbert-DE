import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  @Input() patientID: number;
  @Input() visitID: number
  
  constructor() { }

  ngOnInit() {
  }

}
