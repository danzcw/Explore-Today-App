import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import { TabsPage } from '../tabs/tabs';

@NgModule({
  declarations: [
    WeatherPage,
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(WeatherPage),
  ],
})
export class WeatherPageModule {}
