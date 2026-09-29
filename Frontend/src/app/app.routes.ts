import { Routes } from '@angular/router';
import { Maestros } from './componentes/maestros/maestros';
import { Alumnos } from './componentes/alumnos/alumnos';
import { Login } from './componentes/login/login';
import { NotFound } from './componentes/not-found/not-found';
import { Home } from './componentes/home/home';
import { Registro } from './componentes/registro/registro';

export const routes: Routes = [
    {path: 'home', title: 'Home', component: Home},
    {path: 'maestros', title: 'Maestros', component: Maestros},
    {path: 'alumnos', title: 'Alumnos', component: Alumnos},
    {path: 'login', title: 'Login', component: Login},
    {path: 'registro', title: 'Registro', component: Registro},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', title: 'NotFound', component: NotFound}
];