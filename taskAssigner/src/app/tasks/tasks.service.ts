import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTask } from "./newtask/newtask.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = dummyTasks;


    getUserTasks(userId: string){
        return this.tasks.filter(task=> task.userId === userId);;
    }

    addTask(task: NewTask, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title : task.title,
            summary : task.summary,
            dueDate : task.duedate,
            userId :  userId
          });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task=> task.id != taskId);
    }
}