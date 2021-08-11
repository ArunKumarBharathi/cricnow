import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers:req.headers.append('x-rapidapi-key','f27e585d13msh4a7f263ac71bfb8p1f105ajsncbab1279a777')})
    req = req.clone({headers:req.headers.append('x-rapidapi-host','cricket-live-data.p.rapidapi.com')})

    return next.handle(req)
  }
  
}
