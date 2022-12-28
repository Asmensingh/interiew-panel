import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    dateofbirth: new FormControl(''),
    language:new FormControl(''),
    postion:new FormControl('')
  });
  constructor(){

  }
  ngOnInit(){

  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
}
