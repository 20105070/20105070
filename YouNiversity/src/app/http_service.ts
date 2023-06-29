import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*"); // create header object
    
    return this.http.get('https://localhost:7013/University/GetBlacks', {headers: headers});
  }
}