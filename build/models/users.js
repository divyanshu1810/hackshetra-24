"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor(id, created_at, updated_at, name, email, password, role, isDeleted) {
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isDeleted = isDeleted;
    }
}
exports.Users = Users;
//# sourceMappingURL=users.js.map