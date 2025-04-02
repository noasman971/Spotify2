import {supabase} from "../../supabaseClient";

export type Users = {
    name: string;
    email: string;
    password: string;
};

export const user = supabase.model<Users>("users")
