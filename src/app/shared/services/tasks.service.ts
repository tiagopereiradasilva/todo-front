import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskPayload } from '../interfaces/payload-task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];
  httpClient = inject(HttpClient);
  getAll(){
    return this.httpClient.get<Task[]>('/api/tasks');
  }

  post(payload: TaskPayload){
    return this.httpClient.post('/api/tasks', payload);
  }
}
