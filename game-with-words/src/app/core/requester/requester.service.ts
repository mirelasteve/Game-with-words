import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequesterService {

  private REQUEST_DOMAIN = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) { }

  public get(resource: string, headers?: HttpHeaders): Observable<any>  {
    return this.http.get('http://localhost:3000/guess-the-words');
      // return this.http.get(this.REQUEST_DOMAIN + resource, { headers });
  }

  public post(resource: string, body: any, headers?: HttpHeaders): Observable<any>  {
      return this.http.post(resource, body, {
          headers: new HttpHeaders().set('Content-type', 'application/json'),
    });
  }

  public postFiles (resource: string, body: any): Observable<any>  {
    return this.http.post(resource, body);
}

  public put(resource: string, body: any, headers?: HttpHeaders): Observable<any>  {
      return this.http.put(resource, body, {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
  });
  }

  public delete(resource: string, httpOptions: any): Observable<any>  {
    return this.http.delete(resource, httpOptions);
}
}
