import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL=environment.baseURL;

  constructor(private http: HttpClient) { }
  login(username:string, password:string){

    const httpOtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let httpParams = new HttpParams()
    .append("username", username)
    .append("password", password);
  
    return this.http.post(`${this.baseURL}/login`,httpParams,httpOtions)
    .pipe(tap(user=>{
      console.log(user);
    }));
  }

  
}
