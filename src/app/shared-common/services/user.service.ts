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

  getEmpDetailsById(data: any){
    return this.http.get<any[]>(`${this.baseURL}/empData/${data}`)
    .pipe(tap(res => res));
  }

  //Api for deleteing employee Data by Id
  deleteEmpData(id:any){
    console.log("delete function called");
    return this.http.delete(`${this.baseURL}/empData/${id}`).pipe(tap(res=>res));

  }

   addEmpData(data:any){
     return this.http.post(`${this.baseURL}/empData/`,data)
      .pipe(tap(res=>{
        return res;
      }));
   }

}
          

