import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  public url : string = "";

  constructor(private http : HttpClient, private router : Router) { }
  loginValidationFunction(userName, password){
    alert(userName);
    alert(password);
    var payLoad = {
      userName : userName,
      password : password
    }
    alert(JSON.stringify(payLoad));
    return false;
    // return this.http.post(this.url+'/',{payLoad})
    // .pipe(map(user=>{
    //   // if(){

    //   // }
    // }))
  }
}
