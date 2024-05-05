import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { inject } from '@angular/core';
import { TasksService } from './shared/services/tasks.service';

export const routes: Routes = [
    {
        path: '',
        resolve:{
            tasks : () => {
                return inject(TasksService).getAll();
            }
        },
        component: ListComponent
    }, 
    {
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
