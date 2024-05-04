import { Component, EventEmitter, Output, input, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  task = input<Task | null>(null); // O 'null' é para não tornar o input obrigatório, haja vista que a tarefa pode não existir no backend.

  form! : FormGroup;

  @Output() done = new EventEmitter();

  ngOnInit(){
    this.form = new FormGroup({
      title: new FormControl<string>(this.task()?.title ?? ""),
      description: new FormControl<string>(this.task()?.description ?? "")
    });
  }

  onSubmit() {
    const task = this.form.value as Task;
    this.done.emit(task)
  }

}
