import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryDetailsPage } from './country-details';

@NgModule({
  declarations: [
    CountryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryDetailsPage),
  ],
})
export class CountryDetailsPageModule {}
