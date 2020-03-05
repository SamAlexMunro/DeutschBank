import { MappedCountry } from './../../shared/models/mappedCountry.model';

import { Action } from '@ngrx/store';

export const LOAD_EUROPEAN_COUNTRIES = '[European_Countries] Load Countries';
export const LOAD_EUROPEAN_COUNTRIES_FAIL = '[European_Countries] Load Countries Fail';
export const LOAD_EUROPEAN_COUNTRIES_SUCCESS = '[European_Countries] Load Countries Success';
export const LOAD_ASAIN_COUNTRIES = '[Asain_Countries] Load Countries';
export const LOAD_ASAIN_COUNTRIES_FAIL = '[Asian_Countries] Load Countries Fail';
export const LOAD_ASAIN_COUNTRIES_SUCCESS = '[Asian_Countries] Load Countries Sucess';

export class LoadEuropeanCountries implements Action {
    readonly type = LOAD_EUROPEAN_COUNTRIES;
}

export class LoadEuropeanCountriesFail implements Action {
    readonly type = LOAD_EUROPEAN_COUNTRIES_FAIL;
    constructor(public payload: MappedCountry[]) {

    }
}

export class LoadEuropeanCountriesSuccess implements Action {
    readonly type = LOAD_EUROPEAN_COUNTRIES_SUCCESS;
    constructor(public payload: MappedCountry[]) {
    }
}

export class LoadAsianCountries implements Action {
    readonly type = LOAD_ASAIN_COUNTRIES;
}

export class LoadAsianCountriesFail implements Action {
    readonly type = LOAD_ASAIN_COUNTRIES_FAIL;
    constructor(public payload: MappedCountry[]) {

    }
}

export class LoadAsianCountriesSuccess implements Action {
    readonly type = LOAD_ASAIN_COUNTRIES_SUCCESS;
    constructor(public payload: MappedCountry[]) {

    }
}

export type CountriesAction =
    LoadAsianCountries | LoadAsianCountriesFail | LoadAsianCountriesSuccess |
    LoadEuropeanCountries | LoadEuropeanCountriesSuccess | LoadEuropeanCountriesFail;
