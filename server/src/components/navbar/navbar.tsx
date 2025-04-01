'use client'
import Image from "next/image";
import {Search} from "lucide-react";
import {Button} from "@/components/Button";
import Link from "next/link";


export default function Navbar() {
    const handleSearch = () => {
        alert("ok")
    }
    return(
        <nav className="navbar py-0.5 px-3 flex flex-row gap-10 w-full justify-between items-center bg-black text-[#B1B1B1]">
            <div className="flex items-center gap-7 justify-between">
                <div className="w-10 h-10 relative ">
                    <Link href="/">
                        <Image
                            src="/spotify-icon.png"
                            alt="Spotify logo"
                            fill
                            style={{ objectFit: "contain"}}
                        />
                    </Link>

                </div>

                <div className="flex flex-row gap-1 pl-3 w-xs p-1 rounded-4xl items-center has-focus:border-white bg-[#121212] border border-solid border-[#282828]">
                    <Button icon={<Search/>} onClick={handleSearch}/>


                    <label className={ "navbar-brand font-bold text-xs w-full border-transparent focus:border-transparent focus:ring-0"}>
                        <input type={"text"} className="p-3 w-full rounded-4xl !outline-none"  placeholder={"Que souhaitez vous écouter ou regarder ?"}  />
                    </label>


                </div>
            </div>

            <div className="flex flex-row gap-6  pl-3 w-fit p-1 rounded-4xl items-center">
                <Link className={"hover:text-white hover:scale-105 transition-transform duration-200"} href={"/"} >Premium</Link>
                <Link className={"hover:text-white hover:scale-105 transition-transform duration-200"} href={"/"}  > Assistance </Link>
                <Link className={"hover:text-white hover:scale-105 transition-transform duration-200"}  href={"/"} >Télécharger</Link>
                <div className="trait"></div>
                <Link className={"hover:text-white hover:scale-105 transition-transform duration-200"} href={"/"}>Installer l&apos;appli</Link>
                <Link className={"hover:text-white hover:scale-105 transition-transform duration-200"} href={"/register"} >S&apos;inscrire</Link>
                <Link href={"/login"} className={"bg-white rounded-4xl px-9 py-3.5 text-black font-bold hover:scale-105 transition-transform duration-200"}>Se connecter</Link>

            </div>



        </nav>


    )
}


