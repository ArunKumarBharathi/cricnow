import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/service/series.service';
import { SeriesInfoInterface } from '../../seriesDetails';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {
  id:any;
  leagueMatch=[];
  features=true;
  constructor(private seriesService:SeriesService,private activateRoute:ActivatedRoute,private route:Router) { 
    this.activateRoute.params.subscribe((param) =>{
      this.id=param['id'];
      this.getSeriesInfo(this.id);
    },(err) =>{console.log(err)})

  }

  ngOnInit(): void {
  }
  getSeriesInfo(id){
    this.seriesService.getSeriesInfo(id).subscribe((res) =>{
      // console.log(res)
      // localStorage.setItem('result',JSON.stringify(res))
      res.results.forEach((result) =>{
        this.leagueMatch.push(result);
      })
    },(err) =>{
      console.log(err)
    })
  }
  getFeatures(){
    this.features=!this.features
  }
  getMatchDetails(id){
    this.route.navigate(['/match',id])
  }
}
