var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';
let Platform = class Platform {
    id;
    name;
};
__decorate([
    PrimaryKey({
        type: 'uuid',
        defaultRaw: 'gen_random_uuid()',
    }),
    __metadata("design:type", String)
], Platform.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Platform.prototype, "name", void 0);
Platform = __decorate([
    Entity({ tableName: 'platforms' })
], Platform);
export { Platform };
//# sourceMappingURL=platform.entity.js.map