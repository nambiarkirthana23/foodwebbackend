import { Body, Controller, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
// import { AuthGuard } from "src/auth/guards/auth.guard";
// import { RolesGuard } from "src/auth/guards/roles.guard";
// import { UserRole } from "src/enum/role.enum";
// import { Roles } from "src/auth/decorators/roles.decorator";
import { RegisterUserFoodOrdering } from "./UserFoodWeb";


@Controller('user')
export class UseController {
    constructor(private userService: UsersService) { }
 

    // @UseGuards(AuthGuard,RolesGuard)
    // @Roles(UserRole.ADMIN)

@Post('registerforfoodorder')
async UserRegisterForFoodOrdering(@Body(ValidationPipe)createuserUserRegisterForFoodOrdering:RegisterUserFoodOrdering)
{
console.log("dto",createuserUserRegisterForFoodOrdering);
return await this.userService.userRegisterForFoodOrdering(createuserUserRegisterForFoodOrdering)
}   
}