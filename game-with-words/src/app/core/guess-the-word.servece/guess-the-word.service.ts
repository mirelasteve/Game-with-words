import { Injectable } from '@angular/core';
import { RequesterService } from '../requester/requester.service';
import { Observable } from 'rxjs';
@Injectable()
export class GuessTheWordService {
  constructor(private requester: RequesterService) { }
  public getWords(): Observable<any> {
    const res = this.requester.get('/guess-the-words');
    console.log(res);
    return this.requester.get('/guess-the-words');
  }
}
