import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorFormService {

  // /api/donation
  constructor(private http: HttpClient) { }

  public saveDonorForm(donorForm: any): Observable<Object> { // postMethod
    return this.http.post(environment.baseUrl + 'api/donation', donorForm);
  }
}
