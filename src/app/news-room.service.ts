import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BigNews } from './big-news';



@Injectable({
  providedIn: 'root'
})
export class NewsRoomService {

  apiUrl = "https://back-honey.herokuapp.com"

  constructor( private http:HttpClient) { }

  getTopic(){
    return this.http.get<BigNews>(this.apiUrl+"/getTopicNews").toPromise()
  }

  sendData(formData){
    return this.http.post(this.apiUrl+'/addNews',formData).toPromise()
  }
  
}
