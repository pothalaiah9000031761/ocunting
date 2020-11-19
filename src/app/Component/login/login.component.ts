import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router"

import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    submit = false;
    loginForm: FormGroup;
    submitted = false;


    constructor(private formBuilder: FormBuilder,
        private apiService: LoginService,
        private toastr: ToastrService,
        private router: Router) { }



    SubmitLoginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', Validators.required)
    });

    get loginEmail() {
        return this.SubmitLoginForm.get('email')
    }

    get loginPassword() {
        return this.SubmitLoginForm.get('password')
    }
    get f() { return this.SubmitLoginForm.controls; }


    onSubmit() {
        this.submit = true;

    }


    ngOnInit(): void {

    }



    login(data) {
        //alert("Sucessfully Logged In")
        this.submitted = true;
        this.apiService.login(data).subscribe(
            (res) => {
               console.log(res)
                this.router.navigate(['/dashboard'])
                this.toastr.success('Sucessfully Login');
            }, (error) => {
                this.toastr.error('Invalid Username or Password');
                console.log(error);
                if (error.status == 400) {
                    console.log("called")
                    this.toastr.error(error.error.message);
                } else if (error.status == 500) {
                    this.toastr.error(error.error.message);
                }
            }, () => {

            }

        );
    }
}
