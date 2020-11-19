import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { CustomergroupService } from '../../services/customergroup.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-updategroupingcustomer',
  templateUrl: './updategroupingcustomer.component.html',
  styleUrls: ['./updategroupingcustomer.component.css']
})
export class UpdategroupingcustomerComponent implements OnInit {

  id;
  constructor(private router:Router,private avtiveRouter:ActivatedRoute
    ,private service: CustomergroupService) {
    this.avtiveRouter.params.subscribe( params =>this.id=params.id,
      );
   }
   groupCustomerData:any=[];
   customerGroupName;
  ngOnInit(): void {
    this.service.getCustomersGroupDataById(this.id).subscribe(
      (data)=>{
        this.groupCustomerData=data;
        this.customerGroupName=data['groupName'];
        console.log(this.customerGroupName)
      },(error)=>{

      },()=>{

      }    
    );
  }
  updatecustomerGroup(data){
    console.log(data)
    console.log(data.groupName)
    if(data.groupName == ''){
      return  Swal.fire('customer group name RequiredValidator.')
    }
    this.service.updateCustomersGroupData(this.id,data).subscribe(
      (data)=>{
        console.log(data)
        // this.service.successAlert("customer group updated successfully..")
        Swal.fire('Customer group updated successfully..')
        // Swal.fire({
        //   icon:'error',
        //   text:'Customer group updated successfully..'
        // })
        this.router.navigate(['/customergroupingview'])
      },(error)=>{

      },()=>{   

      }
    );
  }


}
