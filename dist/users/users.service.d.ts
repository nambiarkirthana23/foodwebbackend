import { Repository } from 'typeorm';
import { RegisterUserFoodOrdering } from './UserFoodWeb';
export declare class UsersService {
    private readonly RegisterUserFoodOrdering;
    constructor(RegisterUserFoodOrdering: Repository<RegisterUserFoodOrdering>);
    userRegisterForFoodOrdering(body: RegisterUserFoodOrdering): Promise<RegisterUserFoodOrdering>;
}
