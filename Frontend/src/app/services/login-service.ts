import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class LoginService {
    constructor(){}
    httpClient = inject(HttpClient);
    login(){
        
    } 
}
