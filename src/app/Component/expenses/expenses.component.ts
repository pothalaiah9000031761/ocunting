import { Component, OnInit } from '@angular/core';
import { expensesservice } from 'src/app/services/expensesservice';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  Expensesmodel:any = [];

  constructor(private apiService: expensesservice) { 
    this.updateExpenses();
  }

  ngOnInit(): void {
  }

  updateExpenses(){
      this.apiService.getExpensesDetails().subscribe((data) => {
      this.Expensesmodel = data;
      console.log(this.Expensesmodel);
      })    
    }

}
