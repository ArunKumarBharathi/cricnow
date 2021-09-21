import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Ipl_id="833";
  leagueMatch=[];
  results=[]
  constructor(private seriesService:SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeriesInfo(this.Ipl_id).subscribe((res) =>{
      res.results.forEach((result) =>{
        this.leagueMatch.push(result);
      })
    },(err) =>{
      console.log(err)
    });
    this.seriesService.getResults().subscribe((res) =>{
      res.results.forEach((result) =>{
        this.results.push(result);
      })
    },(err) =>{
      console.log(err)
    });
  }
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  };

}
