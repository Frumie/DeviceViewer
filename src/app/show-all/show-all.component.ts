import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DeviceSource} from '../device.interface';
import { BasicAuthService } from '../services/basic.auth.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  deviceSources: DeviceSource[];
  selectedDevice: DeviceSource;

  isConnected = false;
  queryText: string;

  constructor(private basicAuthService: BasicAuthService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
  }

  ngOnInit() {
    this.basicAuthService.get()
     .subscribe((response) => {
       this.deviceSources = response.hits.hits;
      })
  }

  search() {
    this.basicAuthService.search(this.queryText)
      .subscribe((response) => {
          this.deviceSources = response.hits.hits;
      });
  }

  onSelect(device: DeviceSource) {
    this.selectedDevice = device;
    // @ts-ignore
    $('#show-details').modal()

  }
}
