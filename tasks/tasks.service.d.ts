import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskInterface } from "../interfaces/task";
import { Task } from "./entities/task.entity";
import { User } from "../user/user.entity";
export declare class TasksService {
    filter(task: Task): TaskInterface;
    create(req: CreateTaskDto, user: User): Promise<void>;
    findAll(name: string, user: User): Promise<TaskInterface[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, req: UpdateTaskDto): Promise<{
        isSuccess: boolean;
    }>;
    remove(id: string): Promise<{
        isSuccess: boolean;
    }>;
}
