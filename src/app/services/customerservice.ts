import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class customerservice {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // add cost center
  addCustomer(data): Observable<any> {
    return this.http.post('http://localhost:8080/customerInfo/save', data)
  }

  getCustomerDetails() {
    return this.http.get(`http://localhost:8080/customerInfo/getAllCustomers`);
  }

  getCustomerById(id) {
    return this.http.get(`http://localhost:8080/customerInfo/getCustomerInfo/`+ id);
  }

  updateCustomer(data){
    return this.http.put('http://localhost:8080/customerInfo/edit/', data)
  }

  deleteCustomer(id): Observable<any> { 
    return this.http.delete('http://localhost:8080/customerInfo/delete/'+id)
  }

  // Error handling 
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