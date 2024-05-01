import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];
  httpClient = inject(HttpClient);
  getAll(){
    return this.httpClient.get<Task[]>('/api/tasks');
  }
}
