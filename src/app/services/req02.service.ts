import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class Req02Service {

  constructor(private http: HttpClient) { }

  createReq02(body){
    console.log(body);
    return this.http.post(`${url}/req-02/create`, body);
  }
}
