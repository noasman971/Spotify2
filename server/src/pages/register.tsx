import Navbar from "@/components/navbar/navbar";
import "../app/globals.css"
import {Input} from "@/components/input/input";
export default function Login(){

    return(
        <>
            <Navbar/>
            <Input type={"text"} classname={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} placeholder={"email"}/>
            <p>register</p>
        </>

    )

}
