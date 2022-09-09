import { CreateChatDto } from './dto/create-chat.dto';
import { User } from "../user/user.entity";
import { ChatInterface } from "../interfaces/chat";
export declare class ChatService {
    create(req: CreateChatDto, user: User): Promise<void>;
    findAll(): Promise<ChatInterface[]>;
    findOne(id: number): string;
    update(id: number, updateChatDto: CreateChatDto): string;
    remove(id: number): string;
}
