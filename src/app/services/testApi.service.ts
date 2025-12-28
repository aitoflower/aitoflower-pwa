import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TestApiService {

  constructor(private http: HttpClient) {}

  ping() {
    return this.http.get('https://httpbin.org/anything');
  }
}
