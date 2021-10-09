import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers:req.headers.append('x-rapidapi-key','0739770c89mshcc0b6d2595f61b4p1aa2e9jsnae1d119bc561')})
    req = req.clone({headers:req.headers.append('x-rapidapi-host','cricket-live-data.p.rapidapi.com')})

    return next.handle(req)
  }
  
}
