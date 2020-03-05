import { MappedCountry } from './../../shared/models/mappedCountry.model';
import * as fromCountries from './../actions/countries.action';

export interface CountryState {
    europe: MappedCountry[];
    asia: MappedCountry[];
}

export const initialState: CountryState = {
    asia: [],
    europe: [],
};

export function reducer(state = initialState, action: fromCountries.CountriesAction): CountryState {
    switch (action.type) {
        case fromCountries.LOAD_EUROPEAN_COUNTRIES: {
            return {
                ...state,
            };
        }
        case fromCountries.LOAD_EUROPEAN_COUNTRIES_SUCCESS: {
            const europe = action.payload;
            return {
                ...state,
                europe
            };
        }
        case fromCountries.LOAD_EUROPEAN_COUNTRIES_FAIL: {
            return {
                ...state,
            };
        }
        case fromCountries.LOAD_ASAIN_COUNTRIES: {
            return {
                ...state,
            };
        }
        case fromCountries.LOAD_ASAIN_COUNTRIES_SUCCESS: {
            const asia = action.payload;
            return {
                ...state,
                asia
            };
        }
        case fromCountries.LOAD_ASAIN_COUNTRIES_FAIL: {
            return {
                ...state,
            };
        }
    }
    return state;
}


export const getEuropeanCountries = (state: CountryState) => state.europe;
export const getAsianCountries = (state: CountryState) => state.asia;
