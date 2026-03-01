import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string = environment.apiBaseUrl;
  constructor(private  httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL + "/all");
  }

  deleteUser(id:string):Observable<any>{
    return this.httpClient.delete(this.baseURL + "/delete/"+id);
  }

  addUser(firstname:string,lastname:string):Observable<User>{
    let body = { firstName: firstname, lastName: lastname };
    let url=this.baseURL + "/add";
    return this.httpClient.post<User>(url, body);
  }
}
