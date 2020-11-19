import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseUri: any;
  address:any;
  
  constructor(private http: HttpClient) { }
  
 
  /* Pattabhi*/
  getallVendors() {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/vendor/getCreditDays`);
  }
  getvendorbyId(id) {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/vendor/getCreditLimit/`+ id);
  }
  updatecreditLimit(customerId,amount){
    return this.http.get(`http://localhost:8080/vendor/updateCreditLimit/` +customerId+"/"+amount);
  }
  updatecreditDays(salesId,creditDays){
    return this.http.get(`http://localhost:8080/vendor/updateCreditDays/` +salesId+"/"+creditDays);
  }


  /*Raj*/

  vendorRegistration(data): Observable<any> {let url = `${this.baseUri}/vendorRegistration`;
  return this.http.post('http://localhost:8080/vendor/save', data)
   .pipe(      
    catchError(this.errorMgmt)   
  )
  
}
getcustomVendors(){
  return this.http.get(` http://localhost:8080/vendor/getAllVendors`);  
}
getvenodrbyId(id) {
  // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
  return this.http.get(` http://localhost:8080/vendor/getVendor/`+ id);
}
deletecustomvendor(id ){
  return this.http.delete(` http://localhost:8080/vendor/delete/` + id  );

 }
 updatecustVendor(value){
  return this.http.put(` http://localhost:8080/vendor/edit` , value);
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
