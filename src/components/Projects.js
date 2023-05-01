import React from 'react';
import ProjectCard from './ProjectCard';
import tunesimg from '../assets/png/tunes.png';
import walletimg from '../assets/png/wallet.png';
import shoppingimg from '../assets/png/shoppingcart.png';
import solarsystemimg from '../assets/png/solarsystem.png';
import starwarsimg from '../assets/png/starwars.png';
import appreceitasimg from '../assets/png/appdereceitas.png';
import productsearch from '../assets/png/productsearch.png';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projetos</span>
            <span className="heading-sec__sub">
              Aqui estão alguns dos principais projetos desenvolvidos por mim!
            </span>
          </h2>

          <div className="projects__content">
            <ProjectCard
              image={tunesimg}
              title="More Tunes"
              description="More Tunes é uma aplicação capaz de reproduzir músicas das mais variadas bandas 
              e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada."
              url="https://more-tunes.vercel.app/"
            />
            <ProjectCard
              image={productsearch}
              title="Product Search"
              description="Este é um projeto de um buscador de produtos que conecta-se com as páginas do Mercado Livre e do Buscapé, 
              realizando web scraping para obter informações sobre produtos nas categorias Celular, Geladeira e TV. 
              A busca pode ser feita tanto no Mercado Livre ou Buscapé, e até em ambos."
              url="https://products-search.up.railway.app/"
            />
            <ProjectCard
              image={appreceitasimg}
              title="App de Receitas"
              description="Nele será possível: ver, buscar, filtrar, favoritar e acompanhar o progresso 
              de preparação de receitas de comidas e bebidas! O layout tem como foco dispositivos móveis,
              dessa forma foi desenvolvido para telas menores."
              url="https://app-recipe-plus.vercel.app/"
            />
            <ProjectCard
              image={shoppingimg}
              title="Shopping Cart"
              description="Carrinho de compras totalmente dinâmico, onde você será capaz de pesquisar por diversos 
              produtos e adicioná-los ao carrinho de compras."
              url="https://welitonlimaa.github.io/shopping-cart"
            />
            <ProjectCard
              image={walletimg}
              title="Personal Wallet"
              description="Foi desenvolvido carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário é capaz de:
              adicionar, remover e editar um gasto, visualizar uma tabelas com seus gastos; 
              visualizar o total de gastos convertidos para uma moeda de escolha."
              url="https://welitonlimaa.github.io/personal-wallet"
            />
            <ProjectCard
              image={solarsystemimg}
              title="Solar System"
              description="Nesse aplicação você poderá visualizar todos os planetas do sistema solar renderizados na tela, 
              e visualizar todas as cartas com informações sobre missões espaciais."
              url="https://welitonlimaa.github.io/solar-system"
            />
            <ProjectCard
              image={starwarsimg}
              title="StarWars Planets"
              description="Através da aplicação é possível acessar uma lista de planetas do universo de Star Wars, 
              além disso você poderá pesquisar, filtrar e ordenar esse planetas."
              url="https://welitonlimaa.github.io/starwars-planets"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;