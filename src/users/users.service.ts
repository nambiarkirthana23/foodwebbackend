import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserFoodOrdering } from './UserFoodWeb';
import { UserRegisterDtoForFoodOrderingDto } from './UserRegisterForFoodOrdering';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(RegisterUserFoodOrdering)
        private readonly RegisterUserFoodOrdering: Repository<RegisterUserFoodOrdering>,
      ) {}


  

    async userRegisterForFoodOrdering(body:RegisterUserFoodOrdering):Promise<RegisterUserFoodOrdering>
    {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(body.Password, salt);
        const userreg=new RegisterUserFoodOrdering();
        userreg.Name=body.Name;
        userreg.Email=body.Email;
        userreg.Password=hashedpassword;
        await userreg.save();
        const{Password,...rest}=userreg;
        return rest as RegisterUserFoodOrdering;

    }

}
