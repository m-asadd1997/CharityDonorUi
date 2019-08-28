import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorFormService {

  private  url=environment.baseUrl;
  // /api/donation
  constructor(private http: HttpClient) { }

  public saveDonorForm(donorForm: any): Observable<Object> { // postMethod
    return this.http.post(environment.baseUrl + 'api/donation', donorForm);
  }

  public getAllDonations():Observable<any>{
    return this.http.get(environment.baseUrl+"donation/getall");
  }
  public getDonationById(id):Observable<any>{
    return this.http.get(environment.baseUrl+"donation/id/"+id);
  }

  public getDonationByName(name):Observable<any>{
    return this.http.get(environment.baseUrl+"donation/name/"+name)
  }
}
