import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user:any=('https://63092014f8a20183f76ef345.mockapi.io/api/v1/profile')
  constructor(private http: HttpClient) {}

  data(){
    return this.http.get(this.user)
  }
  
}
