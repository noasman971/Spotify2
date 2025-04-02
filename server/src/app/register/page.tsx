'use client'
import Navbar from "@/components/navbar/navbar";
import "../globals.css"
import {Input} from "@/components/input/input";
import { login, signup } from './action';


export default function Register(){

    return(
        <>
            <Navbar/>
            <form className={"flex flex-col items-center justify-center h-screen bg-gradient-to-r "}>
                <div className={"text-white flex flex-col"}>
                    <h1 className={"text-3xl font-bold   text-center mt-10"}>
                        Inscrivez-vous pour commencer à écouter
                    </h1>
                    <label className={"text-2xl font-bold text-center mt-10"}>
                        Email
                    <Input type={"email"}
                           classname={"max-w-[400px] mx-auto mt-10 border-2 border-white rounded-lg p-2"}
                           placeholder={"email"} name={"email"} isRequired={true}/>

                    </label>
                    <label className={"text-2xl font-bold text-center mt-10"}>
                        Mot de passe
                        <Input type={"password"}
                               classname={"max-w-[400px] mx-auto mt-10 border-2 border-white rounded-lg p-2"}
                               placeholder={"mot de passe"} name={"password"} isRequired={true}/>
                    </label>
                    <label className={"text-2xl font-bold text-center mt-10"}>
                        Pseudo
                        <Input type={"text"}
                               classname={"max-w-[400px] mx-auto mt-10 border-2 border-white rounded-lg p-2"}
                               placeholder={"pseudo"} name={"pseudo"} isRequired={true}/>
                    </label>
                    <button formAction={signup}  className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}>
                        S&aposinscrire
                    </button>
                    <button formAction={login}  className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}>
                        Se connecter
                    </button>
                </div>
            </form>

        </>

    )

}
