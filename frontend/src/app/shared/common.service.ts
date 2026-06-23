import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get('https://reachsky.onrender.com/users');
  }
  postLeadForm(data: any): Observable<any> {
    return this.http.post('https://reachsky.onrender.com/leads', data);
  }
}
