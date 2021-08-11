import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { SeriesInfoDetails } from 'src/app/components/seriesDetails';
import { SeriesService } from '../series.service';

@Injectable({
  providedIn: 'root'
})
export class FixResultService implements Resolve<SeriesInfoDetails>{

  constructor(private seriesService:SeriesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SeriesInfoDetails | Observable<SeriesInfoDetails> | Promise<SeriesInfoDetails> {
    return this.seriesService.getFixResults(route.paramMap.get('id')).pipe(
      take(1),
      map(userdata => userdata))
  }
}
