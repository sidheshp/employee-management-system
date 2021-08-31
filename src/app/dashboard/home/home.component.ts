import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-common/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empDetails: any;

  constructor(private user:UserService) { }

  ngOnInit(): void {

    this.getEmpDetails();

  }

  getEmpDetails(){
    this.user.getEmpDetails().subscribe(data=>{
       console.log(data);
    

       this.empDetails=data;
       console.log(this.empDetails.empName);
      
       
      },error=>{
       console.log(error);

      }
          
          )

  }

}
