import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getTasks } from './shared/resolvers/get-tasks.resolver';
import { getTask } from './shared/resolvers/get-task.resolver';

export const routes: Routes = [
    {
        path: '',
        resolve:{
            tasks : getTasks
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
            task: getTask
        },
        loadComponent: () => import('./features/edit/edit.component').then(m => m.EditComponent)
    }
];
