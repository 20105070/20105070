/*http_service.ts - Daniel Syrén (20105070)*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './models/university';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<University[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*"); // create header object

    return this.http.get<University[]>('https://localhost:7013/University/GetUniversities', { headers: headers });
  }

  deleteUniversity(name: string): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*"); // create header object
    return this.http.delete(`https://localhost:7013/University/DeleteUniversity/${name}`, { headers: headers });
  }

}