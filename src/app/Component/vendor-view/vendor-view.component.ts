
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {

  customers: any = [];
  p: Number = 1;
  count: Number = 5;
  constructor(private apiService: VendorService,private toastr: ToastrService) { 

  }

  ngOnInit(): void {
    this.getcustomVendors();

  }
 
  // go_to_nav(data){
  //   localStorage.setItem('warehouses',JSON.stringify(data))
  // }

  getcustomVendors() {
    this.apiService.getcustomVendors().subscribe(
      data => {
        this.customers= data;    
     //   console.log(this.customers);
      },
      error => {

        
      });}
      deletecustomvendor(id) {
       // if (window.confirm('Are you sure?')) {
          // this.apiService.deletecustomvendor(id).subscribe((data) => {
            // console.log(data);
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
                this.apiService.deletecustomvendor(id).subscribe((data) => {
                Swal.fire(
               
                  'Deleted Successfully'
                )
                this.getcustomVendors();
                })
              }
            
            })
     
            //this.getcustomVendors()
          
            console.log(this.customers)
            
          }
          



      // this.apiService.deleteWarehouseByid(this.data).subscribe(
      //   data => {
      //     console.log(data)

      //   },
      //   error => {
      //     console.log(data)
      //   });



  

}
