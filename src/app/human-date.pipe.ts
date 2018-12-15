import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment"

@Pipe({
  name: 'humanDate'
})
export class HumanDatePipe implements PipeTransform {

  DUMMY_DATE = moment("2001-01-02");

  transform(value: any, args?: any): any {
    if (value == null ||value == "" ) {
      return ""
    }

    let date = moment(value);

    if (date.isBefore(this.DUMMY_DATE)) {
      return ""
    }

    return date.fromNow()
  }

}
