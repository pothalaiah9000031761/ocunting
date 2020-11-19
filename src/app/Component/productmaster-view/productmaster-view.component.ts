import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productmasterservice } from 'src/app/services/productmasterservice';
import Swal from'sweetalert2';

@Component({
  selector: 'app-productmaster-view',
  templateUrl: './productmaster-view.component.html',
  styleUrls: ['./productmaster-view.component.css']
})
export class ProductmasterViewComponent implements OnInit {

  Productmastermodel:any = [];
   constructor(private apiService: productmasterservice,
              private toastr: ToastrService,
              private router: Router,
              ) {

    this.getAllDetails();
   }

  ngOnInit(): void {
  }

  getAllDetails(){
  this.apiService.getProductmasterDetails().subscribe((data) => {
  this.Productmastermodel = data;
  console.log(this.Productmastermodel);
  
  })
  }
  
  deleteProductMaster(productmastermodel, id) {
    
      // this.apiService.deleteProductMaster(productmastermodel.productId).subscribe((data) => {
        // this.toastr.success('productmaster details deleted successfully!');
        Swal.fire({
          title: 'Are you Sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.apiService.deleteProductMaster(productmastermodel.productId).subscribe((data) => {
            Swal.fire(              
              'Deleted Succesfully',
              
            )
            this.getAllDetails();
            })
          }
        })

        console.log(this.Productmastermodel)
        // this.getAllDetails()
        
        console.log(this.Productmastermodel)
        
      }
     
    
  }



