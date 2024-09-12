import { UsersService } from "./users.service";
import { RegisterUserFoodOrdering } from "./UserFoodWeb";
export declare class UseController {
    private userService;
    constructor(userService: UsersService);
    UserRegisterForFoodOrdering(createuserUserRegisterForFoodOrdering: RegisterUserFoodOrdering): Promise<RegisterUserFoodOrdering>;
}
