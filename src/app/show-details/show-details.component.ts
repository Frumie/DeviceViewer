import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html'
})
export class ShowDetailsComponent implements OnInit {
  private _device: any;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  get device(): any {
    return this._device;
  }

  set device(value: any) {
    this._device = value;
  }
}
