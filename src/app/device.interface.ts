export interface Device {
  name: string;
  olt: string
  type: number;
  oper_status: string;
  admin_status: string;
  since: string
  added: string
  last_uptime: string
  last_downtime: string
  alerts: string[]
  alarms: string[]
  error: string;
  vendor: string;
  status: string;
  network_id: number;
  operator_id: number;
  reference: string;
  batch_id: number;
  ont_distance: number
  rx_light_level: string
  sfp_light_level: string
  tx_light_level: string
}

export interface DeviceSource {
  _source: Device;
}
