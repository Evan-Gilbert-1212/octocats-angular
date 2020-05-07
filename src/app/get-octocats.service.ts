import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOctocats } from './octocats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetOctocatsService {
  constructor(private http: HttpClient) {}

  getOctocats(): Observable<IOctocats> {
    return this.http.get<IOctocats>('https://sdg-octodex.herokuapp.com/');
  }
}
