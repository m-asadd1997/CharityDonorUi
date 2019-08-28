import { HttpClientModule } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  public saveUser(users:Object): Observable<Object> {
    return this.http.post(environment.baseUrl+'FormClass',users)
  }


}
