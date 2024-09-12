import { UserRole } from "src/enum/role.enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'createuserfoodorder'})
export class RegisterUserFoodOrdering extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    Name:string;

    @Column()
    Email:string;
    
    @Column()
    Password:string

}
