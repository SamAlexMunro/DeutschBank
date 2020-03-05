import { MappedCountry } from './../../../../shared/models/mappedCountry.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../countries';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  regionOptions = [
    {
      name: 'Europe'
    },
    {
      name: 'Asia'
    }
  ];

  countryData: MappedCountry;
  countries: MappedCountry[];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<fromStore.CountriesState>
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(fromStore.getAsianCountries).subscribe(state => {
      this.countries = state;
    }));
    this.subscriptions.push(this.store.select(fromStore.getEuropeanCountries).subscribe(state => {
      this.countries = state;
    }));
  }

  captureRegion(region: string): void {
    this.dispatchEvent(region);
  }

  captureCountry(country: string): void {
    this.findCountry(country);
  }

  findCountry(country: string): void {
    this.countryData = this.countries.find(element => element.name === country);
  }

  dispatchEvent(region: string) {
    switch (region.toLowerCase()) {
      case 'europe':
        return this.store.dispatch(new fromStore.LoadEuropeanCountries());
      case 'asia':
        return this.store.dispatch(new fromStore.LoadAsianCountries());
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
