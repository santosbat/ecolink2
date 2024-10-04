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

          <section className="nossa_proposta">
            <h2>Nossa Proposta</h2>
          </section>

          <section className="sec_prop">

            <h1 className="proposta">
              Nossa proposta não apenas aborda uma questão de preservação ambiental mas tambem estaremos protegendo o meio ambiente, promovendo uma mudança positiva em nossa comunidade, gerando reconhecimento e incentivo para iniciativas sustentáveis, além disso,  também oferecendo a oportunidade de ganhar prêmios por contribuir com a sustentabilidade.
            </h1>

          </section>

        </div>
      </div>

      <div className="div_botao_exemplo">
        <button className="botao_exemplo">Descartar</button>
      </div>

      <div className="aprendizado">
        <section>
          <h2>Concientizção</h2>
        </section>

        <div>

          <section className="aprend_sec">
          <p className="aprend_p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt hic nam dicta accusantium, delectus minus laboriosam velit. Recusandae officiis obcaecati magni reiciendis quidem voluptatibus modi tempore voluptas eum voluptatum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt hic nam dicta accusantium, delectus minus laboriosam velit. Recusandae officiis obcaecati magni reiciendis quidem voluptatibus modi tempore voluptas eum voluptatum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt hic nam dicta accusantium, delectus minus laboriosam velit. Recusandae officiis obcaecati magni reiciendis quidem voluptatibus modi tempore voluptas eum voluptatum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt hic nam dicta accusantium, delectus minus laboriosam velit. Recusandae officiis obcaecati magni reiciendis quidem voluptatibus modi tempore voluptas eum voluptatum!
          </p>
          </section>

        </div>

      </div>

      <footer className="footer_h"></footer>

    </div>
  );
}

export default Home;
