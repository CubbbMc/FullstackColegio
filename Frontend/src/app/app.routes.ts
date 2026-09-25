import { Routes } from '@angular/router';
import { Maestros } from './componentes/maestros/maestros';
import { Alumnos } from './componentes/alumnos/alumnos';

export const routes: Routes = [ 
    {path:'maestros', title:'Maestros', component: Maestros},
    {path: 'alumnos', title:'Alumnos', component: Alumnos}
];
