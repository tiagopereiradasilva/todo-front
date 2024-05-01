
import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import { Task } from '../../shared/interfaces/task.interface';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  tasks: Task[] = [];
  tasksService = inject(TasksService);
  ngOnInit(){
    this.tasksService.getAll().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }
}
