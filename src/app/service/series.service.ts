import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchDetails, MatchInfo, SeriesInfoDetails, SeriesInfoInterface, SeriesInterface } from '../components/seriesDetails';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }
  
  getSeriesDetails():Observable<SeriesInterface>{
   return this.http.get<SeriesInterface>("https://cricket-live-data.p.rapidapi.com/series");
  }

  getSeriesInfo(id):Observable<SeriesInfoDetails>{
    return this.http.get<SeriesInfoDetails>(`https://cricket-live-data.p.rapidapi.com/fixtures-by-series/${id}`);
  }
  getScoreDetails(id):Observable<MatchInfo>{
    return this.http.get<MatchInfo>(`https://cricket-live-data.p.rapidapi.com/match/${id}`);
  }
  getResults():Observable<SeriesInfoDetails>{
    return this.http.get<SeriesInfoDetails>("https://cricket-live-data.p.rapidapi.com/results");
  }
  getFixResults(id){
    return this.http.get<SeriesInfoDetails>(`https://cricket-live-data.p.rapidapi.com/${id}`);
  }

}
