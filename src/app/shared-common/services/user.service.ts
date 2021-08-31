import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseURL=environment.baseURL;

  constructor(private http: HttpClient) {  }
  getEmpDetails(){
    return this.http.get(`${this.baseURL}/empData`)
    // .pipe(tap(user=>{
    //   console.log(user);
    // }))
  }

}


