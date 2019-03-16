import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BNames } from './models/names';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  getNames() {
    return this.http.get<BNames[]>('assets/names.json').pipe(take(1));
  }
}
