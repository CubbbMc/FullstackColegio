import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../interfaces/credential';
import { jwtDecode } from 'jwt-decode'; 

@Injectable({
    providedIn:'root'
})
export class LoginService {
    constructor(){}
    httpClient = inject(HttpClient);
    login(credential: Credential){
        return this.httpClient.post('http://localhost:3001/login', credential);
    } 
    decodeToken(token: string):any{
        return jwtDecode(token);
    }
}
