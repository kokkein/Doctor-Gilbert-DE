import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class GDService {
    
    constructor(public snackBar: MdSnackBar, private http: Http) {}


    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3000,
        });
      }
}