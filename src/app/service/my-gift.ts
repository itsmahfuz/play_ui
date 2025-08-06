import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MyGift {

  protected http = inject(HttpClient);
  private readonly baseUrl: string = environment.apiBaseUrl;

  sendGift(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
}
