import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/service/series.service';
import { MatchDetails } from '../seriesDetails';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {
  id:any;
  matchScoreDetails:MatchDetails;
  constructor(private seriesService:SeriesService,private activateRoute:ActivatedRoute,private route:Router) { 
    // this.activateRoute.params.subscribe((param) =>{
    //   this.id=param['id'];
    //   this.getMatchDetails(this.id);
    // },(err) =>{console.log(err)})


  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((res) =>{
      this.matchScoreDetails=res.matchScoreDetails.results;
    },(err) =>{
      console.log(err)
    })

  }
  // getMatchDetails(id){
  //   this.seriesService.getScoreDetails(id).subscribe((res) =>{
  //     console.log(res.results);
  //     this.matchScoreDetails=res.results;
  //   },(err) =>{
  //     console.log(err);
  //   })
  // }
}
