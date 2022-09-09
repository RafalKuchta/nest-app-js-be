import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from "../user/user.entity";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, user: User): Promise<void>;
    findAll(name: string, user: User): Promise<import("../interfaces/task").TaskInterface[]>;
    findOne(id: string, user: User): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        isSuccess: boolean;
    }>;
    remove(id: string): Promise<{
        isSuccess: boolean;
    }>;
}
