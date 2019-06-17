import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Router } from '@angular/router';

declare var jquery : any;
declare var $ : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private checkresponse :  boolean= false;

  constructor(private loginObj : BackendServiceService, private router : Router) {}

  ngOnInit() {
   // $("#alertMsg").hide();
  }
  loginFunction(userName , password){
    // $("#alertMsg").hide(4000);
    this.checkresponse = this.loginObj.loginValidationFunction(userName , password);
    if(this.checkresponse === true){
          this.router.navigate(['/home']);
    } else{
      alert("success");
      
    }
  }
}
