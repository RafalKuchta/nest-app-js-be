import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { User } from "../user/user.entity";
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(createChatDto: CreateChatDto, user: User): Promise<void>;
    findAll(): Promise<import("../interfaces/chat").ChatInterface[]>;
    findOne(id: string): string;
    update(id: string, updateChatDto: CreateChatDto): string;
    remove(id: string): string;
}
