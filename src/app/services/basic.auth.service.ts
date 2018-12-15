import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  private _url = 'https://proxes.aex.co.za';


  constructor(private _http: HttpClient) {
  }

  get(): any {
    const headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: headers_object,
      withCredentials: true
    };

    return this._http.get(this._url + '/_search?size=100', httpOptions);
  }

  search(queryText): any {
    const headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: headers_object,
      withCredentials: true
    };
    return this._http.get(this._url + '/_search?size=100&q=_all:' + queryText, httpOptions);
  }

}
