import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('f')
  signUpForm!: NgForm;
  submitted = false;
  genders = [" Male", " Female", " LGBTQ", "Prefer Not To Say"];
  


  
  

  user = {
      username: '',
      password: '',
      email: '' ,
      phone: '',
      secretQuestion: '',
      answer: '',
      gender: '',
      job: '',
      description: '',
      salary: '',
     
  }

onSubmit(){
  this.submitted = true;
  this.user.username = this.signUpForm.value.userData.username
  this.user.password= this.signUpForm.value.userData.password
  this.user.email= this.signUpForm.value.userData.email
  this.user.phone= this.signUpForm.value.userData.phone
  
  this.user.gender= this.signUpForm.value.otherInfo.gender
  this.user.secretQuestion = this.signUpForm.value.otherInfo.secret
  this.user.answer = this.signUpForm.value.otherInfo.answer
  
  this.user.job = this.signUpForm.value.JobDetails.job
  this.user.description = this.signUpForm.value.JobDetails.description
  this.user.salary = this.signUpForm.value.JobDetails.salary

  this.signUpForm.reset();
}

}

