import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html'
})
export class StatusIndicatorComponent implements OnInit {

  _status: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set status(status: string) {
    this._status = status;
  }
  get status(): string { return this._status; }


}
