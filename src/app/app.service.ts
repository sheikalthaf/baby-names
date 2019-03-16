import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BNames } from './models/names';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  getNames() {
    return this.http.get<BNames[]>('assets/names.json');
  }
}
