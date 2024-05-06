import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../shared/interfaces/task.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  taskService = inject(TasksService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  task : Task = inject(ActivatedRoute).snapshot.data['task']; // pegando a Task da rota ativa. de acordo com o resolve da rota 'edit-tas' : app.routes.ts

  onSubmit(task: Task) {
    this.taskService.put(this.task.id, task).subscribe(() => {
      this.snackBar.open("Tarefa editada com sucesso!", "OK");
      this.router.navigateByUrl("/");
    })
  }

}
