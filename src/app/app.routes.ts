import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { inject } from '@angular/core';
import { TasksService } from './shared/services/tasks.service';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }, 
    {
        // fazendo (Lazy Loading) carregar componente apenas quando solicitado
        path:'create-task',
        loadComponent: () => import('./features/create/create.component').then(m => m.CreateComponent)
    },
    {
        path:'edit-task/:id',
        resolve:{
            task: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                return inject(TasksService).get(route.paramMap.get("id") as string);
            }
        },
        loadComponent: () => import('./features/edit/edit.component').then(m => m.EditComponent)
    }
];
