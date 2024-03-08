export class Users {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    email: string;
    password: string;
    role: string;
    isDeleted: boolean;
    constructor(id: number, created_at: Date, updated_at: Date, name: string, email: string, password: string, role: string, isDeleted: boolean) {
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