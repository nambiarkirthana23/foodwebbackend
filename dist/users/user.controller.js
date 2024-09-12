"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const UserFoodWeb_1 = require("./UserFoodWeb");
let UseController = exports.UseController = class UseController {
    constructor(userService) {
        this.userService = userService;
    }
    async UserRegisterForFoodOrdering(createuserUserRegisterForFoodOrdering) {
        console.log("dto", createuserUserRegisterForFoodOrdering);
        return await this.userService.userRegisterForFoodOrdering(createuserUserRegisterForFoodOrdering);
    }
};
__decorate([
    (0, common_1.Post)('registerforfoodorder'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserFoodWeb_1.RegisterUserFoodOrdering]),
    __metadata("design:returntype", Promise)
], UseController.prototype, "UserRegisterForFoodOrdering", null);
exports.UseController = UseController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UseController);
//# sourceMappingURL=user.controller.js.map