import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,public _AuthService:AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      code: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.form.value.type="admin";
    console.log(this.form.value, this._AuthService.baseUrl);
    this._AuthService.login(this.form.value).subscribe({next:response=>{
      let res:any =response
      
      //**************save user token 
      this._AuthService.set_token(res.token)
      //************** set user in data service
      localStorage.setItem('currentUser',JSON.stringify(res));
      //this.userDataService.user=res
      this.router.navigateByUrl('/viewMap');
    },
    error:err=>{
      console.log(err.error);
      
    }
    })
    
  }
}
