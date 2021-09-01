import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared-common/services/user.service';

@Component({
  selector: 'app-add-update-emp',
  templateUrl: './add-update-emp.component.html',
  styleUrls: ['./add-update-emp.component.css']
})
export class AddUpdateEmpComponent implements OnInit {
  

  constructor(private user:UserService,private fb:FormBuilder) { }

  addUpdateForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    empId:[''],
    contact: [''],
    skills: [''],
    address: ['']
  })

  get name() : any {
    return this.addUpdateForm.get('name');
  }
  get empId() : any {
    return this.addUpdateForm.get('empId');
  }

  get email() : any {
    return this.addUpdateForm.get('email');
  }

  get contact() : any {
    return this.addUpdateForm.get('contact');
  }
  get address(): any{
    return this.addUpdateForm.get('address');
  }
  get skills(): any{
    return this.addUpdateForm.get('skills');
  }


  ngOnInit(): void {
 
    
    
   
    
  }
  onSaveData(){
    let data={
      empName:this.name.value,
      email:this.email.value,
      id:this.empId.value,
      contactNo:this.contact.value,
      address:this.address.value,
      skills:this.skills.value  
    }
    this.user.addEmpData(data).subscribe(
      data=>{
        console.log(data);
    },error=>{
        console.log(error);
    });
    
  }

}
