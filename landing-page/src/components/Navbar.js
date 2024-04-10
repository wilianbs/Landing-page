import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image className={styles.image_logo}
                    src="/images/logo.jpg"
                    width="100"
                    height="100"
                    alt="Logo Suellen Louzada"                
                />
                <h1>Suellen Louzada</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/produtos">
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="/contato">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}