import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/service/window.service';
import * as firebase from 'firebase/app'
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone-sign-in',
  templateUrl: './phone-sign-in.component.html',
  styleUrls: ['./phone-sign-in.component.scss']
})
export class PhoneSignInComponent implements OnInit, AfterViewInit {
  windowRef: any;
  phoneNumber: any;
  verificationCode: string;
  constructor(private win: WindowService, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container', {
      'size': "normal",
      'callback': (res) => { }
    })
    this.windowRef.recaptchaVerifier.render()
  }
  sendLoginCode() {
    // firebase.auth().settings.appVerificationDisabledForTesting = true;
    const appVerifier = this.windowRef.recaptchaVerifier;
    // var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const num = `+91` + this.phoneNumber;
    this.loginService.phoneLogin(num, appVerifier).then(result => {
      this.windowRef.confirmationResult = result;
    })
      .catch(error => console.log(error));
  }
  verifyLoginCode() {
    console.log(this.verificationCode)
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error, "Incorrect code entered?"));
  }

}
