import { Routes } from '@angular/router';
import { Maestros } from './componentes/maestros/maestros';
import { Alumnos } from './componentes/alumnos/alumnos';
import { Login } from './componentes/login/login';
import { NotFound } from './componentes/not-found/not-found';
import { Home } from './componentes/home/home';


export const routes: Routes = [ 
    {path:'maestros', title:'Maestros', component: Maestros},
    {path: 'alumnos', title:'Alumnos', component: Alumnos},
    {path: 'login', title: 'login', component: Login },
    {path: '**', title: 'notFound', component: NotFound},
    {path: 'home', title: 'Home', component: Home},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
