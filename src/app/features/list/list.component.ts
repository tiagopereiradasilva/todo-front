
import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import { Task } from '../../shared/interfaces/task.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  tasks: Task[] = [];
  tasksService = inject(TasksService);
  router = inject(Router);
  ngOnInit(){
    this.tasksService.getAll().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }

  onEdit(task: Task){
    this.router.navigate(['/edit-task', task.id]);
  }
}
