"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmconfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [__dirname, '**', '*.entity.{ts,js}'],
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmconfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.config.js.map