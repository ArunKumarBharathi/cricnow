import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import  firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userState:any;
  constructor(private fireAuth:AngularFireAuth, private http:HttpClient,private route:Router) {
    this.fireAuth.authState.subscribe((user)=>{
      if(user){
        this.userState=user;
        // console.log(this.userState)
        localStorage.setItem('user',JSON.stringify(this.userState))
      }
    })
   }

  login(email,password){
  return  this.fireAuth.signInWithEmailAndPassword(email,password).then((res) =>{
      // console.log(res);
      this.handleResponse(res);
      return res
    }).catch((err) =>{
      this.errorResponse(err);
    })
  }
  signUp(email,password){
    return this.fireAuth.createUserWithEmailAndPassword(email,password).then((res) =>{
      // console.log(res)
      return res
    }).catch((err) =>{
      this.errorResponse(err);
    })
  }
  fbLogin(){
    return this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res)=>{
      // console.log(res);
      return res
    }).catch((err) =>{
      this.errorResponse(err);
    })
  }
  twitterLogin(){
    return this.fireAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((res)=>{
      // console.log(res);
      return res
    }).catch((err) =>{
      console.log(err)
      this.errorResponse(err);
    })
  }
  googleLogin(){
    return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res)=>{
      // console.log(res);
      return res
    }).catch((err) =>{
      this.errorResponse(err);
    })
  }
  phoneLogin(number,appVerifier){
   return  firebase.auth().signInWithPhoneNumber(number,appVerifier).then((res)=>{
      // console.log(res);
      return res
    }).catch((err) =>{
      this.errorResponse(err);
    })
  }
  errorResponse(err){
    throw err.message
  }
  handleResponse(res){
    // this.fireAuth.authState.subscribe((user)=>{
    //   if(user){
    //     this.userState=user;
    //     console.log(this.userState)
    //     localStorage.setItem('user',JSON.stringify(this.userState))
    //   }
    // })
    if(res.user){
      // console.log(res.user)
      setInterval(() =>{
        this.route.navigate(['/home'])
      },1000)
      
    }
  }
 logout(){
   this.fireAuth.signOut().then(() =>{
     localStorage.removeItem('user')
   })
 }
}
