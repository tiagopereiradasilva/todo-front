import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../shared/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../shared/interfaces/task.interface';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  taskService = inject(TasksService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  task : Task = inject(ActivatedRoute).snapshot.data['task']; // pegando a Task da rota ativa. de acordo com o resolve da rota 'edit-tas' : app.routes.ts


  form = new FormGroup({
    title: new FormControl<string>(this.task.title),
    description: new FormControl<string>(this.task.description)
  });

  onSubmit() {
    this.taskService.put(this.task.id, {
      title: this.form.controls.title.value != null ? this.form.controls.title.value : "",
      description: this.form.controls.description.value != null ? this.form.controls.description.value : ""
    }).subscribe(() => {
      this.form.controls.title.setValue("");
      this.form.controls.description.setValue("");
      this.snackBar.open("Tarefa editada com sucesso!", "OK");
      this.router.navigateByUrl("/");
    })
  }

}
