
import Image from "next/image";

import Logo from "../../../public/Logo.svg"
import Phone from "../../../public/Phone.svg"
import Sobaka from "../../../public/dog.svg"



export default function Home() {
    return (
        <div className="w-full max-w-screen" >
            <Main />
        </div>
    )
}

export function Header() {
    return (

        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-20 flex justify-between items-center container pt-7">
            <Image src={Logo} alt="logo" />
            <nav className="flex gap-6 text-white">
                <a href="">About the Shelter</a>
                <a href="">Our Pets</a>
                <a href="#">Help the shelter</a>
                <a href="#r">Contacts</a>
            </nav>

        </header>
    )
}

function Main() {
    return (
        <div className="flex flex-col w-full h-fit" >
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src={Phone} alt="logo" className="object-cover w-full h-full  " />
            </div>
            <div className="grid grid-cols-2 z-10 container mx-auto flex-row justify-center items-center gap-30 h-screen text-white">
                <div>
                    <div className=" flex flex-col gap-10">
                        <h1 className="text-[44px]" >Not only people <br />
                        </h1>
                        <p>We offer to give a chance to a little and nice puppy with an extremely <br />
                            wide and open heart. He or she will love you more than anybody else <br />
                            in the world, you will see!</p>

                        <a className="bg-[#F1CDB3] items-center w-50 h-12 rounded-full justify-center inline-flex" href="">Make a friend</a>
                    </div>

                </div>

                <div className="h-full relative items-end flex justify-end" >
                    <Image src={Sobaka} alt="" className=" items-end" />
                </div>

            </div>
        </div>

    )

}

