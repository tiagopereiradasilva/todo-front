import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }, 
    {
        // fazendo (Lazy Loading) carregar componente apenas quando solicitado
        path:'create-task',
        loadComponent: () => import('./features/create/create.component').then(m => m.CreateComponent)
    }
];
