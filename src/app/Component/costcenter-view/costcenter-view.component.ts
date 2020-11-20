
import { Component, OnInit } from '@angular/core';
import { costcentermodel } from 'src/app/model/costcentermodel';
import { costcenterservice } from '../../services/costcenterservice';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-costcenter-view',
  templateUrl: './costcenter-view.component.html',
  styleUrls: ['./costcenter-view.component.css']
})
export class CostcenterViewComponent implements OnInit {
  Costcentermodel: any = [];
  // Costcentermodels: Object;
  
  p: Number = 1;
  count: Number = 5;

  constructor(
    private apiService: costcenterservice,
    private toastr: ToastrService,
    ) {
    this.getAllDetails();
  }

  ngOnInit(): void {
  }

  // go_to_nav(costcentermodel){
  //   localStorage.setItem('costcentermodels',JSON.stringify(costcentermodel))
  //   }

  getAllDetails() {
    this.apiService.getCostCenterDetails().subscribe((data) => {
      this.Costcentermodel = data;
      console.log(this.Costcentermodel);

    })
  }

  deleteCostCenter(costcentermodel, index) {
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
         this.apiService.deleteCostCenter(costcentermodel.id).subscribe((data) => {
          Swal.fire(
            'Deleted Successfully'
          )
          this.getAllDetails();
         })
        // this.toastr.success('Cost Center details deleted successfully!');
        // console.log(data);
        // console.log(this.Costcentermodel)
        // this.getAllDetails();
        // this.Costcentermodel.forEach(function (ech, ind) {
        //   if (ech['id'] == data['cost']['id']) {
        //     console.log(ech);
        //     this.Costcentermodel.splice(ind, 1);
        //   }
        // })
        console.log(this.Costcentermodel);
        
      }
      
    })
  }


}
