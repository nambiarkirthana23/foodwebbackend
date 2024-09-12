import {  IsEmpty, IsNotEmpty,  Matches } from "class-validator";
import { UserRole } from "src/enum/role.enum";

export class UserRegisterDtoForFoodOrderingDto{
    // @IsNotEmpty()
    // id:number;

    @IsEmpty()
    Name:string;

    @IsNotEmpty()
    Email:string;


    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,{message:'Password should have 1 upper case,lowercase along with number and special character.'})
    @IsNotEmpty()
    Password:string;


   
}