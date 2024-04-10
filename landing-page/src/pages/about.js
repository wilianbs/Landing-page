
import styles from '../styles/About.module.css';
import  Image from 'next/image';


export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre nós</h1>
            <p>
                Apresentamos a nossa marca de bolsas inovadoras, onde a criatividade encontra a funcionalidade. Utilizamos materiais sintéticos de alta qualidade para produzir bolsas que são verdadeiras obras de arte. Nossos designers estão constantemente buscando inspiração em diversas fontes para criar modelos únicos e originais que se destacam da multidão.
Nossas bolsas são mais do que simples acessórios - são declarações de estilo que refletem a personalidade e o gosto individual de cada pessoa que as carrega. Desde padrões vibrantes até formas e texturas incomuns, nossa coleção oferece uma variedade de opções para todos os gostos e ocasiões.
Além disso, estamos comprometidos com a sustentabilidade e a responsabilidade ambiental. Ao optar por materiais sintéticos, estamos reduzindo o impacto ambiental da produção de nossas bolsas, sem comprometer a qualidade ou o estilo. Nosso objetivo é oferecer bolsas criativas que não apenas complementam o seu look, mas também contribuem para um mundo mais sustentável.
Então, se você está procurando por uma bolsa que seja tão única quanto você, não procure mais. Descubra nossa coleção de bolsas criativas e faça uma declaração de moda que é verdadeiramente sua.
            </p>
            <Image
            src='/images/bolsaRosa.jpeg'
            width='600'
            height='600'
            alt='Varias bolsas'
            />
        </div>
    )
}