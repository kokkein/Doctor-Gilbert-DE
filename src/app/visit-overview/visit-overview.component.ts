import { GDService } from './../services/GDService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterDataService } from './../services/masterdata.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-visit-overview',
  templateUrl: './visit-overview.component.html',
  styleUrls: ['./visit-overview.component.css']
})
export class VisitOverviewComponent implements OnInit {
  data: any = {};

  constructor(private GDService: GDService, private MasterDataService: MasterDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.MasterDataService.GetVisit().subscribe(visitdata => {
      this.data = visitdata; 
    });
  }

  onNew() {
 
    this.router.navigate(['/visit']);
  }
  onRowSelect(event) {
 
    this.router.navigate(['/episode/', event.selectedRowKeys[0].visitID]);
  }

}
