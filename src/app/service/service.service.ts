import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user:any=('https://63092014f8a20183f76ef345.mockapi.io/api/v1/profile')
  assess:any=('https://63092014f8a20183f76ef345.mockapi.io/api/v1/assessments')
  chat:any=('https://63092014f8a20183f76ef345.mockapi.io/api/v1/chatbot_response')
  comment:any=('https://63092014f8a20183f76ef345.mockapi.io/api/v1/comments')
  constructor(private http: HttpClient) {}

  data(){
    return this.http.get(this.user)
  }
  
  assessment(){
    return this.http.get(this.assess)
  }
  chatbot(){
    return this.http.get(this.chat)
  }
  comments(){
    return this.http.get(this.comment)
  }
}
