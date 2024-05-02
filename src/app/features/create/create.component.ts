import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TasksService } from '../../shared/services/tasks.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  taskService = inject(TasksService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>('')
  });


  onSubmit() {
    
    this.taskService.post({
      title: this.form.controls.title.value != null ? this.form.controls.title.value : "",
      description: this.form.controls.description.value != null ? this.form.controls.description.value : ""
    }).subscribe(() => {
      this.form.controls.title.setValue("");
      this.form.controls.description.setValue("");
      this.snackBar.open("Tarefa criada com sucesso!", "OK", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition:"top"
      });
      this.router.navigateByUrl("/");
    })
  }
}
