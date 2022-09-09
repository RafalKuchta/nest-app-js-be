"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./entities/task.entity");
const typeorm_1 = require("typeorm");
let TasksService = class TasksService {
    filter(task) {
        const { id, name, completed } = task;
        return { id, name, completed };
    }
    async create(req, user) {
        console.log(user);
        try {
            const task = new task_entity_1.Task();
            task.name = req.name;
            task.completed = req.completed;
            task.user = user.email;
            await task.save();
        }
        catch (e) {
            throw e;
        }
    }
    async findAll(name, user) {
        const tasks = (await task_entity_1.Task.find({
            where: {
                user: user.email,
                name: (0, typeorm_1.Like)(`%${name}%`)
            }
        }));
        return tasks;
    }
    async findOne(id) {
        const task = await task_entity_1.Task.findOne({
            where: {
                id,
            }
        });
        return task;
    }
    async update(id, req) {
        if (!id) {
            throw new Error('Task not found!');
        }
        const task = await task_entity_1.Task.findOne({
            where: {
                id,
            }
        });
        if (task) {
            task.completed = req.completed;
            task.name = req.name;
            await task.save();
            return {
                isSuccess: true,
            };
        }
        return {
            isSuccess: false,
        };
    }
    async remove(id) {
        if (!id) {
            throw new Error('Task not found!');
        }
        const task = await task_entity_1.Task.findOne({
            where: {
                id,
            }
        });
        if (task) {
            await task.remove();
            return {
                isSuccess: true,
            };
        }
        return {
            isSuccess: false,
        };
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map