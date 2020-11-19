import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // registerForm: FormGroup;
  // submitted = false;
 constructor(){}

 ngOnInit(){

//   this.registerForm = this.formBuilder.group({
//     firstName: ['', Validators.required],
//     india: ['', Validators.required]
// });
}

// get f() { return this.registerForm.controls; }

// onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)')
// }
}

