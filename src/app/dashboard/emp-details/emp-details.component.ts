import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared-common/services/user.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) { }

  empId: any = "";

  empDetailsForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    contact: [''],
    skills: [''],
    address: ['']
  })

  get name() : any {
    return this.empDetailsForm.get('name');
  }

  get email() : any {
    return this.empDetailsForm.get('email');
  }

  get contact() : any {
    return this.empDetailsForm.get('contact');
  }
  get address(): any{

    return this.empDetailsForm.get('address');
    
  }

  get skills(): any{

    return this.empDetailsForm.get('skills');

  }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.empId = params.get('empId');


      this.userService.getEmpDetailsById(this.empId).subscribe(emp =>{
        let empDetails = [];
        // console.log(emp);
        empDetails.push(emp);

        empDetails.forEach((x: any) =>{
          this.name.setValue(x.empName);
          this.contact.setValue(x.contactNo);
          this.email.setValue(x.email);
          this.address.setValue(x.address);
          this.skills.setValue(x.skills);
        })
        
      })

    })
  }

}
