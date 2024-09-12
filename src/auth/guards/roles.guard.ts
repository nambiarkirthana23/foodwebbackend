// import {
//     ExecutionContext,
//     Injectable,
//     HttpException, HttpStatus, CanActivate
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { UserRole } from 'src/enum/role.enum';
// import { JwtPayload } from '../interface/jwt-payload.interface';
// @Injectable()
// export class RolesGuard implements CanActivate {

//     constructor(private readonly reflector: Reflector) { }
//     canActivate(context: ExecutionContext) {

//         console.log("User ")
//         const roles = this.reflector.get<UserRole[]>('role', context.getHandler());

//         if (!roles || roles.length === 0) {
//             return true;
//         }

//         const request = context.switchToHttp().getRequest();
//         console.log("User ", request);
//         const user: JwtPayload = request.user;



//         const hasRole = () => roles.indexOf(user.role) >= 0;
//         // console.log(user)
//         if (user && user.role && hasRole()) {
//             return true;
//         }
//         throw new HttpException('You do not have permission', HttpStatus.UNAUTHORIZED);

//     }

// }  