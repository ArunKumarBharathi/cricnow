
export interface SeriesDetails{
    season:string;
    series_name:string;
    series_id:string;
    status:string;
    updated?:string;
}
export interface SeriesInterface{
    meta:{};
    results:SeriesTypeInterface[]
}
export interface SeriesTypeInterface{
    type:string;
    series:SeriesDetails[];
}
export interface SeriesInfoInterface{
    away:team;
    date:string;
    home:team;
    id:string;
    match_title:string;
    result:string;
    status:string;
    venue:string;
    series_id:string;
    start_date?:string;
}
export class team{
    code:string;
    id:string;
    name:string;
}
export class SeriesInfoDetails{
    results:SeriesInfoInterface[];
}
export interface MatchSummary{
    away_scores:string
    home_scores:string
    in_play:string
    result:string
    status:string
    toss:string
}
export interface Umpire{
    referee:string;
    umpire_1:string;
    umpire_2:string;
    umpire_reserve:string;
    umpire_tv:string;
}
export interface Batsman{
    balls:string;
    player_name:string;
    fours:string;
    sixes:string;
    runs:string;
    strike_rate:string;
    player_id:string;
    how_out:string;
}
export interface Bowler{
    player_name:string;
    fours:string;
    sixes:string;
    runs_conceded:string;
    player_id:string;
    how_out:string;
    wickets:string;
    economy:string;
    extras:string;
    maidens:string;
    overs:string;
    dot_balls:string;
}
export interface player{
    player_name:string;
    player_id:string;
    
}
export interface ScoreDetails{
    batting:Batsman[];
    bowling:Bowler[];
    extras:string;
    extras_detail:string;
    fow:string;
    innings_number:string;
    overs:string;
    runs:string;
    wickets:string;
    title:string;
    still_to_bat:player[]
}
export class LiveDetails{
    match_summary:MatchSummary;
    officials:Umpire;
    scorecard:ScoreDetails[];
}
export class MatchDetails{
    fixture:SeriesInfoInterface;
    live_details:LiveDetails;
}
export class MatchInfo{
    results:MatchDetails
}