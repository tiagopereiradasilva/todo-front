import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskPayload } from '../interfaces/payload-task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  httpClient = inject(HttpClient);
  getAll(){
    return this.httpClient.get<Task[]>('/api/tasks');
  }

  get(id: string){
    return this.httpClient.get<Task>(`/api/tasks/${id}`);
  }

  post(payload: TaskPayload){
    return this.httpClient.post('/api/tasks', payload);
  }

  put(id: string, payload: TaskPayload){
    return this.httpClient.put(`/api/tasks/${id}`, payload);
  }
}
