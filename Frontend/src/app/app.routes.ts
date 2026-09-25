import { Routes } from '@angular/router';
import { Maestros } from './componentes/maestros/maestros';
import path from 'path';

export const routes: Routes = [ 
    {path:'maestros', title:'Maestros', component: Maestros}
];
