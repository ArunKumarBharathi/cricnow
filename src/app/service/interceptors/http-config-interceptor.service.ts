import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers:req.headers.append('x-rapidapi-key','13564b1849msh8fd880fe8ade726p1af044jsnb8e95dee4633')})
    req = req.clone({headers:req.headers.append('x-rapidapi-host','cricket-live-data.p.rapidapi.com')})

    return next.handle(req)
  }
  
}
