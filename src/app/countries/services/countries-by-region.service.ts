import { Country } from './../../shared/models/country.model';
import { MappedCountry } from './../../shared/models/mappedCountry.model';
import { Injectable } from '@angular/core';
import { HandleError } from './serviceClasses/handleError';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { restCountriesUrl } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesByRegionService {
  handleError: HandleError;

  constructor(
    private readonly http: HttpClient
  ) {
    this.handleError = new HandleError();
  }

  formatNumber(num: number): string {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  /** Normally I'd expect the transformation logic here to be handled by a server such as node to reduce the JSON payload
   * on the first load.
   */
  getCountriesByRegion(region: string, version = 'v2'): Observable<MappedCountry[]> {
    return this.http.get(`${restCountriesUrl}${version}/region/${region}`)
      .pipe(
        map((response: Country[]) => {
          return response.reduce((acc: any[], value: Country) => {
            return acc.concat({
              name: value.name,
              capital: value.capital,
              population: this.formatNumber(value.population),
              currencies: [value.currencies.map((currency) => ` ${currency.name}`)],
              flag: value.flag
            });
          }, []);
        }),
        catchError(this.handleError.handleError<any[]>('getCountriesByRegion', []))
      );
  }
}
