import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomergroupService {
  baseUri: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

  getallCustomersData() {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/customerInfo/listAllCustomers`);
  }
  getallCustomersGroupData() {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/customerInfo/listAllCustomerGroups`);
  }
  updateCustomersGroupData(id, data) {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.put(`http://localhost:8080/customerInfo/updateCustomerGroupById/` + id, data);
  }
  getCustomersGroupDataById(id) {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/customerInfo/findCustomerGroupId/` + id);
  }
  deleteCustomerGroup(id) {
    return this.http.delete(`http://localhost:8080/customerInfo/deleteCustomerGroupById/` + id);
  }

  createCustomerGroup(data): Observable<any> {
    let url = `${this.baseUri}/vendorRegistration`;

    return this.http.post('http://localhost:8080/customerInfo/createCustomerGroup', data)

      .pipe(
        catchError(this.errorMgmt)
      )

  }

successAlert(data){
  this._snackBar.open(data,'ok',{
    duration:4000,
    panelClass: ['success-snackbar']
  })
}

errorAlert(data){
  this._snackBar.open(data,'ok',{
    duration:4000,
    panelClass: ['error-snackbar']
  })
}

errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
