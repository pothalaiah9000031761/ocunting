import { Component, OnInit } from '@angular/core';
import { customerservice } from '../../services/customerservice';
import Swal from'sweetalert2';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customerinfo: any = [];
  totalRecords:any;
  page:number=1; 
  constructor(private apiService: customerservice) { 
    this.getAllDetails();
  }
 
  ngOnInit(): void {
  }

  arrayCustomerInfo:any=[];
  getAllDetails() {
    this.apiService.getCustomerDetails().subscribe((data) => {
      this.customerinfo = data;
     // this.totalRecords=this.customerInfo.length;
      this.totalRecords=this.customerinfo['allCustomerInfo'].length

    })
  }
  customerId;
  deleteCustomer(customerId) {
    console.log(customerId)
    this.customerId=customerId
  }
  delete(){
    this.apiService.deleteCustomer(this.customerId).subscribe((data) => {
      console.log(data);
      document.getElementById("deleteModal").click();
      Swal.fire('Customer deleted successfully..')
      this.getAllDetails()
      console.log(this.customerinfo)
      
    }
    )
  }

  customerInfo:{};
adds;city;company;email;
fax;firstName;gstRegistrationType;lastName;
notes;phone;pincode;
state;
  getCustomerDetailesbyId(id){
    this.apiService.getCustomerById(id).subscribe(
      (data)=>{
        this.customerInfo=data['customerInfo'];
        this.adds=this.customerInfo['address']
        this.city=this.customerInfo['city']
        this.company=this.customerInfo['company']
        this.email=this.customerInfo['email']
        this.fax=this.customerInfo['fax']
        this.firstName=this.customerInfo['firstName']
        this.gstRegistrationType=this.customerInfo['gstRegistrationType']
        this.lastName=this.customerInfo['lastName']
        this.notes=this.customerInfo['notes']
        this.phone=this.customerInfo['phone']
        this.pincode=this.customerInfo['pincode']
        this.state=this.customerInfo['state']
        console.log(this.adds)
      },(error)=>{
        console.log(error);
      },()=>{

      }
    );
  }

}
