import { ROLE } from "./role.enum";

export class User {
    username = '';
    email = '';
    password = false;
    role = ROLE.USER;

    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}