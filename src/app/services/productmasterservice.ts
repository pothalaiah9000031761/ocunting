import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
 
export class productmasterservice {
  
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private http: HttpClient) { }
 
  
  addProductMaster(data): Observable<any> {
    

    return this.http.post('http://localhost:8080/productmaster/product/createProducts', data)
  .pipe(
        catchError(this.errorMgmt)
      )
  }

  getProductmasterDetails() {
   
    return this.http.get(`http://localhost:8080/productmaster/product/getAllProducts`,);
  }

  getProductMasterById(id) {
    return this.http.get('http://localhost:8080/productmaster/product/getProductById/'+id);
  } 

  updateProductMaster(data){
    return this.http.put('http://localhost:8080/productmaster/product/updateProduct' ,data)
  }

  deleteProductMaster(id): Observable<any> {
    console.log(id)
       return this.http.delete('http://localhost:8080/productmaster/product/deleteProductById/'+ id 
    )
  }
 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
     
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}