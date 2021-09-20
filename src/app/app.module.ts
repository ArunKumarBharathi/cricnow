import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhoneSignInComponent } from './login/phone-sign-in/phone-sign-in.component';
import { SeriesComponent } from './components/series/series.component'
import { HttpConfigInterceptorService } from './service/interceptors/http-config-interceptor.service';
import { SeriesInfoComponent } from './components/series/series-info/series-info.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './components/home/home.component';
import { FixTuresAndResultsComponent } from './components/fix-tures-and-results/fix-tures-and-results.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PhoneSignInComponent,
    SeriesComponent,
    SeriesInfoComponent,
    MatchDetailsComponent,
    ScoreCardComponent,
    HomeComponent,
    FixTuresAndResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpConfigInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
