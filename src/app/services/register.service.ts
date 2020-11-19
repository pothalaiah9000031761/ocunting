import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUri: any;
  address:any;
  constructor(private http: HttpClient) { }
  
  registarion(data): Observable<any> {let url = `${this.baseUri}/registarion`;
  // debugger
    return this.http.post('http://localhost:8080/warehouse/registerWarehouse', data)
 
      .pipe(      
        catchError(this.errorMgmt)   
      )
      

  }
  getallWarehouse() {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/warehouse/listAllWarehouses`);
  }
  getWarehousebyId(id) {
    // return this.http.get(`${this.baseUri}/getProductmasterDetails`);
    return this.http.get(`http://localhost:8080/warehouse/findWarehouseById/`+ id);
  }
  


  updatedWarehouse(id ,value){
    return this.http.put(`http://localhost:8080/warehouse/updateWarehouseById/` + id, value);
  }

  deleteWarehouseByid(id ){
  return this.http.delete(`http://localhost:8080/warehouse/deleteWarehouseById/` + id  );

  }

  createWarehouseGroup(data){
    return this.http.post(`http://localhost:8080/warehouse/createWarehouseGroup`,data)
  }

  listAllWarehouseGroups(){
    return this.http.get(`http://localhost:8080/warehouse/listAllWarehouseGroups`)
  }

/*.......Shekar.............*/

deleteWarehouseGroupById(id ){
  return this.http.delete(`http://localhost:8080/warehouse/deleteWarehouseGroupById/` + id  );

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
