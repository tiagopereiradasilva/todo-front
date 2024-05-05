import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TasksService } from "../services/tasks.service";

export const getTask = (route: ActivatedRouteSnapshot) => {
    return inject(TasksService).get(route.paramMap.get("id") as string);
}