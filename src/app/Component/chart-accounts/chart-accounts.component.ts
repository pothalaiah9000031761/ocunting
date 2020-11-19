import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { chartofaccountsservice } from '../../services/chartofaccountsservice';


@Component({
  selector: 'app-chart-accounts',
  templateUrl: './chart-accounts.component.html',
  styleUrls: ['./chart-accounts.component.css']
})
export class ChartAccountsComponent implements OnInit {

  Chartofaccountsmodel:any = [];

  constructor(private apiService: chartofaccountsservice) {
    this.updateCostCenter();
   }

  ngOnInit(): void {
  }

  updateCostCenter(){
    this.apiService.getChartOfAccountDetails().subscribe((data) => {
    this.Chartofaccountsmodel = data;
    console.log(this.Chartofaccountsmodel);
    })    
  }

}
