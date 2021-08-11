import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixTuresAndResultsComponent } from './components/fix-tures-and-results/fix-tures-and-results.component';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { SeriesInfoComponent } from './components/series/series-info/series-info.component';
import { SeriesComponent } from './components/series/series.component';
import { AuthGaurdGuard } from './guards/auth-gaurd.guard';
import { LoginComponent } from './login/login.component';
import { PhoneSignInComponent } from './login/phone-sign-in/phone-sign-in.component';
import { FixResultService } from './service/Resolve/fix-result.service';
import { ScoreCardResolveService } from './service/Resolve/score-card-resolve.service';
import { SeriesResolveService } from './service/Resolve/series-resolve.service';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGaurdGuard]},
  {path:'home', component:HomeComponent,canActivate:[AuthGaurdGuard]},
  {path:'login',component:LoginComponent},
  {path:'phone-sign-in',component:PhoneSignInComponent},
  {path:'series',component:SeriesComponent,resolve:{series:SeriesResolveService},canActivate:[AuthGaurdGuard]},
  {path:'series/:id',component:SeriesInfoComponent,canActivate:[AuthGaurdGuard]},
  {path:'match/:id',component:MatchDetailsComponent,resolve:{matchScoreDetails:ScoreCardResolveService},canActivate:[AuthGaurdGuard]},
  {path:'fixResult/:id',component:FixTuresAndResultsComponent,resolve:{series:FixResultService},canActivate:[AuthGaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
