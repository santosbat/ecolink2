import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="menu_inicial">
      <header className="main-header-class" id="main-header">
        <div className="logo">
          <a href={"/Home"}>
            <img src="src/assets/LogoEcolink-semFundo.png" alt="logo" className="logo_img" />
          </a>
        </div>
        <nav className="navbar">
          <a href={"/Descartar"}>Descartar</a>
          <a href={"/Sobre"}>Sobre Nós</a>
          <a href={"/Cadastro"}>Cadastro</a>
          <a href={"/Login"}>Login</a>
        </nav>
      </header>

      <div className="div_exemplo">
        <img src="src/assets/LogoEcolink.jpg" alt="" className="image_exemplo"/>
        <div>
          <section>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo ex ullam! Pariatur labore neque corrupti fugit reprehenderit exercitationem temporibus nihil possimus, ipsum quae quasi veritatis adipisci deserunt velit nemo.</h1>
          </section>
        </div>
      </div>
      <div className="div_botao_exemplo">
        <button className="botao_exemplo">Descartar</button>
      </div>
    </div>
  );
}

export default Home;
