
import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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
