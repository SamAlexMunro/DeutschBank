import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Input() options;
  @Input() placeholder: string;
  @Output() selectEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.selectEvent.emit(event);
  }
}
