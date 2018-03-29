import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CelebrityPage } from '../pages/celebrity/celebrity';
import { HeadlinesPage } from '../pages/headlines/headlines';
import { HistoricPage } from '../pages/historic/historic';
import { WeatherPage } from '../pages/weather/weather';
import { WelcomePage } from '../pages/welcome/welcome';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CelebrityPage,
    HeadlinesPage,
    HistoricPage,
    WeatherPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CelebrityPage,
    HeadlinesPage,
    HistoricPage,
    WeatherPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
