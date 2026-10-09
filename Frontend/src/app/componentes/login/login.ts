import { Component, inject } from '@angular/core';
import {Credential} from '../../interfaces/credential';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})

export class Login {
  loginService: LoginService = inject(LoginService);
  credentialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required)
  });

handleSubmit() {
  //console.log(this.credentialsForm);
  if(this.credentialsForm.valid) {

    const username = this.credentialsForm.value.username;
    const contraseña = this.credentialsForm.value.contraseña;


      if(typeof username === 'string' && typeof contraseña === 'string') {
        const credential: Credential = {
          username,
          contraseña,
        };
        console.log(credential);
        this.loginService.login(credential).subscribe((response: any) => {
          console.log("response:",response);
        })
      }

  } else {
    console.log('Error invalid form');
    
  }
  }
};


