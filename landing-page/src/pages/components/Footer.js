import styles from '../../styles/Footer.module.css';
import Image from 'next/image'; 

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Image
                    src="/images/logo.jpg"
                    width="50"
                    height="50"
                    alt="Logo Suellen Louzada"
                />
            </div>
            <p>
                <span>Suellen Louzada </span>
                &copy; 2024
            </p>
            <div className={styles.midia}>
                <p>Instagran</p>
                <p>WhatsApp</p>
                <p>Facebook</p>
            </div>
        </footer>
    );
}
