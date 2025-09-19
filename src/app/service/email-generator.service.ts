import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailGeneratorService {

  protected http = inject(HttpClient);
  private readonly baseUrl: string = environment.apiBaseUrl;

  createUser(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/email/create-user', data, );
  }

  generateEmail(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/email/generate', data);
  }

}
