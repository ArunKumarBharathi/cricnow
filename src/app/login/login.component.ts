import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { WindowService } from '../service/window.service';
import { ErrorModalDirective } from '../shared/error-modal.directive';
import { ErrorModalComponent } from '../shared/error-modal/error-modal.component';
import * as firebase from 'firebase/app'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginRsubmit=true;
  error='';
  @ViewChild(ErrorModalDirective) errorModal:ErrorModalDirective;
  windowRef:any;
  phoneNumber:any;
  verificationCode: string;
  phoneClick=false;
  closeErrorModal:Subscription;
  constructor(private form:FormBuilder, private loginService:LoginService, private factory:ComponentFactoryResolver, private win:WindowService, private route:Router) { }
 
  ngOnInit(): void {
    this.loginForm=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
 
 

  login(){
    if(this.loginRsubmit){
      // console.log(this.loginForm.value.email,this.loginForm.value.password)
      this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).then((res)=>{
        // console.log(res);
        this.handleResponse(res);
      }).catch((error)=>{
        console.log(error);
        this.showError(error);
      });
    }else{
      this.loginService.signUp(this.loginForm.value.email,this.loginForm.value.password).then((res)=>{
        // console.log(res);
        this.handleResponse(res);
      }).catch((error)=>{
        console.log(error);
        this.showError(error);
      });;
    }
   
  }
  changeForm(event:Event){
    event.preventDefault();
    this.loginForm.reset();
    this.loginRsubmit=!this.loginRsubmit;
  }
  fbLogin(event:Event){
    event.preventDefault();
    this.loginService.fbLogin().then((res)=>{
      // console.log(res);
      this.handleResponse(res);
    }).catch((error)=>{
      console.log(error);
      this.showError(error);
    });;
  }
  twitterLogin(event:Event){
    // event.preventDefault();
    this.loginService.twitterLogin().then((res)=>{
      // console.log(res);
      this.handleResponse(res);
    }).catch((error)=>{
      console.log(error);
      this.showError(error);
    });;
  }
  googleLogin(event:Event){
    event.preventDefault();
    this.loginService.googleLogin().then((res)=>{
      // console.log(res);
      this.handleResponse(res);
    }).catch((error)=>{
      console.log(error);
      this.showError(error);
    });;
  }
  handleResponse(res){
    // console.log(res.user)
    if(res.user){
      setInterval(() =>{
        this.route.navigate(['/home'])
      },1000)
    }
  }
  showError(err){
    this.error=err;
    let modalComp=this.factory.resolveComponentFactory(ErrorModalComponent);
    let modal=this.errorModal.containerRef.createComponent(modalComp);
    modal.instance.error=this.error;
    let closeErrorModal=modal.instance.close.subscribe((res)=>{
      closeErrorModal.unsubscribe()
      this.errorModal.containerRef.clear();
    })
  }
  ngOnDestroy(): void {
    if(this.closeErrorModal){
      this.closeErrorModal.unsubscribe()
    }
  }
}
