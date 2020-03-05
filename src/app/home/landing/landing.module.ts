import { CountriesModule } from '../../countries/countries.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { TableControlsComponent } from './components/table-controls/table-controls.component';
import { TableComponent } from './components/table/table.component';
import { OptionsComponent } from './components/options/options.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableControlsComponent,
    TableComponent,
    OptionsComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CountriesModule
  ]
})
export class LandingModule { }
