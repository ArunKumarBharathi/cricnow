import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/service/series.service';
import { SeriesDetails, SeriesInterface, SeriesTypeInterface } from '../seriesDetails';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  seriesDetails=[];
  // seriesType=['Test','T20 International','T20 Leagues','ODI','List-A','First Class'];
  seriesType:string[]=[];
  series:any;
  index=0;
  type='Test';
  constructor(private seriesService:SeriesService, private route:Router,private activateRoute:ActivatedRoute) { 
    // this.seriesService.getSeriesDetails().subscribe((res) =>{
    //   this.series=res;
    //   this.series.results.forEach((result) =>{
    //    //  console.log(result.type)
    //     this.seriesType.push(result.type)
    //    //  console.log(result.series)
    //     this.seriesDetails.push(result.series)
    //    })
    //   //  console.log(this.seriesDetails)
    //  })
  }

  ngOnInit(): void {
   this.activateRoute.data.subscribe((res) =>{
     this.series=res.series
     console.log(res)
     this.series.results.forEach((result) =>{
      this.seriesType.push(result.type)
         //  console.log(result.series)
          this.seriesDetails.push(result.series)
     })
   })
  }
  getSeries(index,type){
    this.index=index;
    this.type=type
  }
  getSeriesInfo(id){
    // this.seriesService.getSeriesInfo()
    this.route.navigate(['/series',id])
  }
}
