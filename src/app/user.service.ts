import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<any>{
    return this.httpc.get("http://localhost:52132/api/users") as Observable<any>;
  }

  constructor(private httpc: HttpClient) { }
}
