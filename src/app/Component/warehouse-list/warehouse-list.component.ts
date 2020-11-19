import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import Swal from'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
  totalRecords:any;
  p: Number = 1;
  count: Number = 5;
  Warehouses: any = [];

  constructor(private apiService: RegisterService, private toastr: ToastrService    ) { 

  }

  ngOnInit(): void {
    this.getallWarehouse();
 
   
  
  }
 
  // go_to_nav(data){
  //   localStorage.setItem('warehouses',JSON.stringify(data))
  // }

  getallWarehouse() {
    this.apiService.getallWarehouse().subscribe(
      data => {
        this.Warehouses= data;    
        this.totalRecords=this.Warehouses.length;
        console.log(this.totalRecords)
        console.log(this.Warehouses)
      },
      error => {

      
      });}

      deletewarehouse(id) {
        // if (window.confirm('Are you sure?')) {
          // this.apiService.deleteWarehouseByid(id).subscribe((data) => {          
         
            Swal.fire({
              title: 'Are you Sure?',
              text: "",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {

                this.apiService.deleteWarehouseByid(id).subscribe((data) => {

                Swal.fire(
                  'Deleted Successfully'
                );
                this.getallWarehouse();
              })
              }
              //this.getallWarehouse()
            })
                  
            // this.toastr.success('Sucessfully   Deleted');

          
            console.log(this.Warehouses)
            
          }
          



      // this.apiService.deleteWarehouseByid(this.data).subscribe(
      //   data => {
      //     console.log(data)

      //   },
      //   error => {
      //     console.log(data)
      //   });



  
}


  


