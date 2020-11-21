import { Component, OnInit } from '@angular/core';
import { CustomergroupService } from '../../services/customergroup.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-customer-grouping-view',
  templateUrl: './customer-grouping-view.component.html',
  styleUrls: ['./customer-grouping-view.component.css']
})
export class CustomerGroupingViewComponent implements OnInit {

  public groupList:any[];
  totalRecords:any;
  page:number=1; 
  constructor(private service: CustomergroupService) { }

  ngOnInit(): void {
    this.getAllCustomersGroupData();
  }
  customersAllGroupName:any=[];
  getAllCustomersGroupData(){
    this.service.getallCustomersGroupData().subscribe(
      (data)=>{
        console.log(data)
        this.customersAllGroupName=data;
        this.totalRecords=this.customersAllGroupName.length;
      },(error)=>{
          console.log(error)
      }
    );
  }
  customerGroupId;
  delete(id){
    console.log(id)
    this.customerGroupId=id;
  }
  deleteGroupCustomer(){
    
    this.service.deleteCustomerGroup(this.customerGroupId).subscribe(
      (data)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
       
        
        this.getAllCustomersGroupData();
      },(error)=>{
        console.log(error)
      },()=>{

      }
    );
  }


}
