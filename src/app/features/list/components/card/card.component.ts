import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  task = input.required<Task>();

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  taskTitle = computed(() => this.task().title);
  taskDescription = computed(() => this.task().description);
  taskStatus = computed(() => this.task().status);
  taskCreatedAt = computed(() => this.task().createdAt);
  taskUpdatedAt = computed(() => this.task().updatedAt);
  
  onClick(){
    this.edit.emit();
  }

  onDelete(){
    this.delete.emit();
  }
}
