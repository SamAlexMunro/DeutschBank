import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as countryActions from '../actions';
import { CountriesByRegionService } from '../services/countries-by-region.service';

@Injectable()
export class CountryEffects {

    loadEuropeanCountries$ = createEffect(() => this.actions$.pipe(
        ofType(countryActions.LOAD_EUROPEAN_COUNTRIES),
        switchMap(() => this.countriesByRegionService.getCountriesByRegion('europe')
            .pipe(
                map(countries => new countryActions.LoadEuropeanCountriesSuccess(countries)),
                catchError((err) => of(new countryActions.LoadEuropeanCountriesFail(err)))
            ))
    ));

    loadAsianCountries$ = createEffect(() => this.actions$.pipe(
        ofType(countryActions.LOAD_ASAIN_COUNTRIES),
        switchMap(() => this.countriesByRegionService.getCountriesByRegion('asia')
            .pipe(
                map(countries => new countryActions.LoadAsianCountriesSuccess(countries)),
                catchError((err) => of(new countryActions.LoadAsianCountriesFail(err)))
            ))
    ));

    constructor(
        private actions$: Actions,
        private readonly countriesByRegionService: CountriesByRegionService
    ) { }
}
