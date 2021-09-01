import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-common/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empDetails: any;
  empName1:any;

  constructor(private user:UserService) { }

  ngOnInit(): void {

    this.getEmpDetails();

    
  }

  getEmpDetails(){
    this.user.getEmpDetails().subscribe(data=>{
      console.log(data);
      
      
      this.empDetails=data;
      this.empDetails.forEach((x: any)=> {
        console.log(x.empName);
      })

     // this.empName1=this.empDetails.empName;
       //console.log(this.empName1);
      
       
      },error=>{
       console.log(error);

      }
          
          )


          // this.route.paramMap.subscribe(params=>{
          //   this.empId = params.get('empId');
      
          //   this.userService.getEmpDetailsById(this.empId).subscribe(emp =>{
          //     let empDetails = [];
          //     console.log(emp);
          //     empDetails.push(emp);
      
          //     empDetails.forEach((x: any) =>{
          //       this.name.setValue(x.empName);
          //       this.contact.setValue(x.contactNo);
          //       this.email.setValue(x.email);
          //     })
  }
  deleteEmployee(id: any){
   this.user.deleteEmpData(id).subscribe(res=>{
    this.getEmpDetails();
      console.log(res)
    })
  }
  

}
