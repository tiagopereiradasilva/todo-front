import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TasksService } from '../../shared/services/tasks.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  taskService = inject(TasksService);

  form = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>('')
  });


  onSubmit() {

    this.taskService.post({
      title: this.form.controls.title.value != null ? this.form.controls.title.value : "",
      description: this.form.controls.description.value != null ? this.form.controls.description.value : ""
    }).subscribe(() => {
      alert("Sucesso ao cadastrar Tarefa.");
      this.form.controls.title.setValue("");
      this.form.controls.description.setValue("");
    });
  }
}
