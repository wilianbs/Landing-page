
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from '../../styles/Produto_id.module.css'
import Image from 'next/image';

export default function Produto() {
  const router = useRouter();
  const { produto_id } = router.query;
  const [produto, setProduto] = useState(null);

  const [indiceImagem, setIndiceImagem] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faz a requisição HTTP para obter os dados do arquivo JSON
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados do produto');
        }
        const data = await response.json();
        // Encontra o produto correspondente ao ID na lista de produtos
        const foundProduto = data.produtos.find((p) => p.id === parseInt(produto_id));
        setProduto(foundProduto);
      } catch (error) {
        console.error('Erro:', error.message);
      }
    };

    // Verifica se o ID do produto está definido e faz a requisição dos dados
    if (produto_id) {
      fetchData();
    }
  }, [produto_id]);

  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  const proximaImagem = () => {
    if (indiceImagem < produto.imagens.length - 1) {
      setIndiceImagem(indiceImagem + 1);
    }
  };

  // Função para voltar para a imagem anterior
  const imagemAnterior = () => {
    if (indiceImagem > 0) {
      setIndiceImagem(indiceImagem - 1);
    }
  };
  

  return (
    <div className={style.container} >

        
        <div className={style.descricao}>
            <h1>{produto.nome}</h1>
            <span>{produto.valor}</span>
            <p>{produto.descricao}</p>
            
                    <a href={`https://wa.me/5512991511546?text=Olá, gostaria de saber mais sobre "${produto.nome}"`}>
                        Comprar pelo WhatsApp
                    </a>
            
            
        </div>
        <div className={style.container_image}>
            <div className={style.image}>
                <Image
                src={produto.imagens[indiceImagem]}
                width={400}
                height={400}
                alt={produto.nome} 
                />
                
            </div>
            <div className={style.btn}>
                    <button className={style.voltar} onClick={imagemAnterior}>Voltar</button>
                    <button className={style.proximo} onClick={proximaImagem}>Próximo</button>
            </div>
            
        </div>
        
        <div className={style.background} style={{ backgroundImage: `url(${produto.fotos})`}}  >

        </div>
      
    </div>
  );
}
