import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-maestros',
  styleUrl: './maestros.css',
  templateUrl: './maestros.html',
})
export class Maestros {
constructor(private router: Router){}

logout(){
localStorage.removeItem('token');
this.router.navigate(['/login']);
}

}
