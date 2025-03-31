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
        <nav className="navbar p-3 flex flex-row gap-10 w-full justify-between items-center">
            <div className="flex items-center gap-7 justify-between">
                <div className="w-12 h-12 relative ">
                    <Image
                        src="/spotify-icon.png"
                        alt="Spotify logo"
                        fill
                        style={{ objectFit: "contain"}}
                    />
                </div>

                <div className="flex flex-row gap-1 pl-3 w-xs p-1 rounded-4xl items-center has-focus:border-white bg-[#121212] border border-solid border-[#282828]">
                    <Button icon={<Search/>} onClick={handleSearch}/>


                    <label className={ "navbar-brand font-bold text-xs w-full border-transparent focus:border-transparent focus:ring-0"}>
                        <input type={"text"} className="p-3 w-full rounded-4xl !outline-none"  placeholder={"Que souhaitez vous écouter ou regarder ?"}  />
                    </label>


                </div>
            </div>

            <div className="flex flex-row gap-6  pl-3 w-fit p-1 rounded-4xl items-center">
                <Link href={"/"} >Premium</Link>
                <Link href={"/"}  > Assistance </Link>
                <Link href={"/"} >Télécharger</Link>
                <div className="trait"></div>
                <Link href={"/"}>Installer l&apos;appli</Link>
                <Link href={"/register"} >S&apos;inscrire</Link>
                <Link href={"/login"} className={"bg-white rounded-4xl px-3 py-2 text-black font-bold"}>Se connecter</Link>

            </div>



        </nav>


    )
}


