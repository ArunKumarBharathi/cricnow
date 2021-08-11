import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { MatchInfo } from 'src/app/components/seriesDetails';
import { SeriesService } from '../series.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreCardResolveService implements Resolve<MatchInfo>{

  constructor(private seriesService:SeriesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MatchInfo | Observable<MatchInfo> | Promise<MatchInfo> {
    return this.seriesService.getScoreDetails(route.paramMap.get('id')).pipe(
      take(1),
      map(userdata => userdata)
    )
    }

}
