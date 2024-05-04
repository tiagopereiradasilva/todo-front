import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Task } from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  taskService = inject(TasksService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(task: Task) {
    
    this.taskService.post(task).subscribe(() => {
      this.snackBar.open("Tarefa criada com sucesso!", "OK");
      this.router.navigateByUrl("/");
    })
  }
}
