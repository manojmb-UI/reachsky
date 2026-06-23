import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get('http://localhost:8000/users');
  }
  postLeadForm(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/leads', data);
  }
}
