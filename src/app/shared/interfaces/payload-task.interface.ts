import { Task } from "./task.interface";

export type TaskPayload = Omit<Task, 'id' | 'status' | 'createdAt' | 'updatedAt'>;