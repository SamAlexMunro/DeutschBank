
import * as fromCounties from './countries.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CountriesState {
    countries: fromCounties.CountryState;
}

export const reducers: ActionReducerMap<CountriesState> = {
    countries: fromCounties.reducer
};

export const getCountriesState = createFeatureSelector<CountriesState>(
    'countries'
);

export const getCountryState = createSelector(getCountriesState, (state: CountriesState) => state.countries);
export const getEuropeanCountries = createSelector(getCountryState, fromCounties.getEuropeanCountries);
export const getAsianCountries = createSelector(getCountryState, fromCounties.getAsianCountries);
