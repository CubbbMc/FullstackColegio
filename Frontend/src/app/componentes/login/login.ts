import { Component } from '@angular/core';
import {Credential} from '../../interfaces/credential';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})

export class Login {
  credentialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

handleSubmit() {
  //console.log(this.credentialsForm);
  if(this.credentialsForm.valid) {

    const username = this.credentialsForm.value.username;
    const password = this.credentialsForm.value.password;


      if(typeof username === 'string' && typeof password === 'string') {
        const credential: Credential = {
          username,
          password,
        };
        console.log(credential);
      }

  } else {
    console.log('Error invalid form');
    
  }
  }
};


