import { Component, OnInit } from '@angular/core';
import { costcenterservice } from '../../services/costcenterservice';

@Component({
  selector: 'app-costcenter-grouping-view',
  templateUrl: './costcenter-grouping-view.component.html',
  styleUrls: ['./costcenter-grouping-view.component.css']
})
export class CostcenterGroupingViewComponent implements OnInit {

  allCostCenterGroupData:any;    
  p: Number = 1;
  count: Number = 5;
  constructor(public http: costcenterservice) { }

  ngOnInit(): void {

    this.http.listAllCostCenterGroups().subscribe((posResp)=>{
      this.allCostCenterGroupData=posResp;
      console.log(this.allCostCenterGroupData)
  },(errResp)=>{
      console.log(errResp)
  })

  }


}