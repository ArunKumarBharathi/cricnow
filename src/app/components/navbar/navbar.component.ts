import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed = true;
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.loginService.logout();
  this.route.navigate(['/login'])
}
}
