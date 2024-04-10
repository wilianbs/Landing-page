import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function Card({produto}) {

    return(
        <div className={styles.card}>
            <Image
            src={produto.fotos}
            width="200"
            height="200"
            alt={produto.nome}
            />
            <h3 className={styles.title}>{produto.nome}</h3>
            <p className={styles.resumo}>{produto.resumo}</p>
            <p className={styles.valor}>{produto.valor}</p>
            
            
            <Link className={styles.link_btn} href={`/produtos/${produto.id}`}>
               Detalhes
            </Link>
        </div>
    )
}