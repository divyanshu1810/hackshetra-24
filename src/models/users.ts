export class Users {
    created_at: Date;
    updated_at: Date;
    name: string;
    email: string;
    password: string;
    role: string;
    company: string;
    isDeleted: boolean;
    constructor(created_at: Date, updated_at: Date, name: string, email: string, password: string, role: string, isDeleted: boolean) {
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isDeleted = isDeleted;
    }
}