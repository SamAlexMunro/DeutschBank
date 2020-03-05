import { MappedCountry } from './../../../../shared/models/mappedCountry.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() countryData: MappedCountry;
  keys: any[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.countryData) {
      this.getObjectKeys();
    }
  }

  getObjectKeys() {
    this.keys = Object.keys(this.countryData);
  }
}
