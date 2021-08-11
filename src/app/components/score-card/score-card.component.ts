import { Component, Input, OnInit } from '@angular/core';
import { Batsman, Bowler, MatchDetails, ScoreDetails } from '../seriesDetails';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  @Input() matchDetail:MatchDetails
  @Input() innings:any;
  batsman:Batsman[]=[];
  bowler:Bowler[]=[];
  score:ScoreDetails;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.score=this.matchDetail.live_details.scorecard[this.innings]
    this.batsman=this.matchDetail.live_details.scorecard[this.innings].batting;
    this.bowler=this.matchDetail.live_details.scorecard[this.innings].bowling;
  }

}
