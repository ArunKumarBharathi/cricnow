import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-fix-tures-and-results',
  templateUrl: './fix-tures-and-results.component.html',
  styleUrls: ['./fix-tures-and-results.component.scss']
})
export class FixTuresAndResultsComponent implements OnInit {
  id:any;
  leagueMatch=[];
  searchTerm:string;
  series:any;
  constructor(private seriesService:SeriesService,private activateRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) =>{
      this.id=param['id'];
    },(err) =>{console.log(err)})

    this.activateRoute.data.subscribe((res) =>{
      this.series=res.series
      this.series.results.forEach((result) =>{
        this.leagueMatch.push(result);
      })
    },(err) =>{
      console.log(err)
    })

    
  }

}
