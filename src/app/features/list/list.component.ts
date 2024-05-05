
import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import { Task } from '../../shared/interfaces/task.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, DialogComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  tasks: Task[] = [];
  tasksService = inject(TasksService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  confimationDialog = inject(ConfirmationDialogService);
  ngOnInit() {
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onEdit(task: Task) {
    this.router.navigate(['/edit-task', task.id]);
  }

  onDelete(task: Task) {
    this.confimationDialog.openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.tasksService.delete(task.id).subscribe(() => {
          this.snackBar.open("Tarefa removida com sucesso!", "OK");
          this.tasksService.getAll().subscribe((tasks) => {
            this.tasks = tasks;
          });
          this.router.navigateByUrl("/");
        })
      });
  }

}
