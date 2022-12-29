import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFrom: any;
  constructor(
    private formBuilder: FormBuilder,
    // private apiService: ApiService,
    // private alertService: AlertService,
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
  ) { 
    this.checkToken();
    this.form();
  }
  form(){
    this.loginFrom = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,]),
      role: new FormControl('1'),
    })
  }
  formSubmit(){
    if(!this.loginFrom.valid) return;
    console.log('this.loginFrom', this.loginFrom.value)
    // this.apiService.callAPI('post', this.loginFrom.value, `admin/auth/login`,true).subscribe((data:any)=>{
    //   localStorage.setItem('token', data.token);
    //   this.router.navigate(['/tag']);
    // })
  }
  checkToken(){
    if(localStorage.getItem('token')){
      // this.router.navigate(['/test']);
    }
  }
}
