import User from '../models/user';

export const createUser = (id:number, name: string, email: string, password: string, isAdmin: boolean) => {
    const user = new User(id, name, email, password, isAdmin);
    user.save();
    return user;
}

