import Link from "next/link"
import Image from "next/image"


export default function Navbar() {
    return(
        <nav>
            <div>
                <Image
                    src="/image/vercel.svg"
                    width="30"
                    height="30"
                    alt="Logo Suellen Louzada"                
                />
                <h1>Suellen Louzada</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}