// pages/index.js
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import data from '../../public/data.json';

export default function Home() {
  const produtos = data.produtos;

  return (
    <>
      <div className={styles.title_container}>
        <h1>Bestsellers</h1>
      </div>

      <div className={styles.produtos_container}>
        {produtos.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
