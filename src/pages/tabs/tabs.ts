import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CelebrityPage } from '../celebrity/celebrity';
import { HeadlinesPage } from '../headlines/headlines';
import { HistoricPage } from '../historic/historic';
import { WeatherPage } from '../weather/weather';





@Component({
  templateUrl: 'tabs.html',
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WeatherPage;
  tab3Root = HistoricPage;
  tab4Root = HeadlinesPage;
  tab5Root = CelebrityPage;

  constructor() {
  }

  

}
