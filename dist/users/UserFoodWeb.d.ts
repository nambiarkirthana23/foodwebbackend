import { BaseEntity } from "typeorm";
export declare class RegisterUserFoodOrdering extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
}
