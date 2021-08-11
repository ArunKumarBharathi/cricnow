import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
import { SeriesInterface } from 'src/app/components/seriesDetails';
import { SeriesService } from '../series.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesResolveService implements Resolve<SeriesInterface> {

  constructor(private seriesService:SeriesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SeriesInterface | Observable<SeriesInterface> | Promise<SeriesInterface> {
   return this.seriesService.getSeriesDetails().pipe(
    take(1),
    map(userdata => userdata)
  )
  }
}
