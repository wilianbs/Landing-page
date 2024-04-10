
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

const produtos=[
  {id:0, nome:'Bolsa de campo', valor:'R$ 35,90', resumo:'Resumo do produto', descricao:'Texto do produto', fotos: ['123', '456','789' ] },
  {id:1, nome:'Bolsa Masculina', valor:'R$ 45,90', resumo:'Resumo do produto', descricao:'Texto do produto', fotos: ['123', '456','789' ] },
  {id:2, nome:'Pasta de Campo', valor:'R$ 25,90', resumo:'Resumo do produto', descricao:'Texto do produto', fotos: ['123', '456','789' ] },
  {id:3, nome:'Pastinha', valor:'R$ 15,90', resumo:'Resumo do produto', descricao:'Texto do produto', fotos: ['123', '456','789' ] },
  {id:4, nome:'Pastinha trasparente', valor:'R$ 18,90', resumo:'Resumo do produto', descricao:'Texto do produto', fotos: ['123', '456','789' ] }
]

export default function Home() {
  return (
    <>
      <div className={styles.title_container }>
        <h1>Bestsellers</h1>
      </div>
      
      <div className={styles.produtos_container}>
        {produtos.map((produto) => (
          <Card key={produto.id} produto={produto}/> 
        ))}
        
      </div>
    </>
  );
}
