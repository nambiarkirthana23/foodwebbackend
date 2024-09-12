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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterDtoForFoodOrderingDto = void 0;
const class_validator_1 = require("class-validator");
class UserRegisterDtoForFoodOrderingDto {
}
exports.UserRegisterDtoForFoodOrderingDto = UserRegisterDtoForFoodOrderingDto;
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], UserRegisterDtoForFoodOrderingDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDtoForFoodOrderingDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,}$/, { message: 'Password should have 1 upper case,lowercase along with number and special character.' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDtoForFoodOrderingDto.prototype, "Password", void 0);
//# sourceMappingURL=UserRegisterForFoodOrdering.js.map