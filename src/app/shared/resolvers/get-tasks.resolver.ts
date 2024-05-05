import { inject } from "@angular/core";
import { TasksService } from "../services/tasks.service";

export const getTasks = () => {
    return inject(TasksService).getAll();
}