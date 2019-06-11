import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.URL

@Injectable({
  providedIn: 'root'
})
export class Req01Service {

  constructor(private http: HttpClient) { }

  createReq01(body){
    console.log(body);
    return this.http.post(`${URL}/req-01/create`, body)
  }

}
