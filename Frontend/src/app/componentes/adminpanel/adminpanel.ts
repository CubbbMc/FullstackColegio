import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  imports: [],
  selector: 'app-adminpanel',
  styleUrl: './adminpanel.css',
  templateUrl: './adminpanel.html',
})
export class Adminpanel {
  constructor(private router: Router){}

logout(){

  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}
}