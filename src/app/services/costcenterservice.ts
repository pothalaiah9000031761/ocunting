import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class costcenterservice {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  cost: any;

  constructor(private http: HttpClient) { }

  // add cost center
  addCostCenter(data): Observable<any> {
    return this.http.post('http://localhost:8080/Save', data);
  }

  // Retrieve all the cost center details
  getCostCenterDetails() {
    return this.http.get(`http://localhost:8080/get`);
  }

  getCostCenterById(id) {
    // console.log(id);
    return this.http.get(`http://localhost:8080/getbyid/`+ id);
  }

  updateCostCenter(id, data){
    return this.http.put('http://localhost:8080/update/'+id, data);
  }

  // Delete cost center
  deleteCostCenter(id): Observable<any> { 
    return this.http.delete('http://localhost:8080/delete/'+id)
  }

  // Cost center grouping
  createCostCenterGroup(data){
    return this.http.post(`http://localhost:8080/createCostcenterGroup`,data)
  }

  // Cost center grouping view
  listAllCostCenterGroups(){
    return this.http.get(`http://localhost:8080/listAllCostCenterGroups`)
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