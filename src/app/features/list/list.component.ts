
import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  tasks: any[] = [];
  tasksService = inject(TasksService);
  ngOnInit(){
    this.tasksService.getAll().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }
}
