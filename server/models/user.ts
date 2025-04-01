
export default class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _password: string;
    private _isAdmin: boolean;

    constructor(id: number, name: string, email: string, password: string, isAdmin: boolean) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._isAdmin = isAdmin;
    }
    save(): void {
        // Logic to save the user to a database or any other storage
        console.log(`User ${this._name} saved with ID ${this._id}`);
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }
}