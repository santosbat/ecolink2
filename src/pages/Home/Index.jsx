import { Link } from "react-router-dom"

function Home() {
  return(

    <div className="container">

      <header className="main-header-class" id="main-header">
        <section>

        <a href="#" className="logo">
          <img src="src/assets/LogoEcolink-semFundo.png" alt="logo" />
        </a>
        <nav className="navbar">
        <a href="#"> home</a>
        <a href="#about">Sobre</a>
        <a href="#menu">Menu</a>
        <a href="#review">Avaliações</a>
        <a href="#address">Endereço</a>

       </nav>
        </section>

       
      </header>

  < h2>Home</h2>


  <Link to={"/Cadastro"}> Realize seu cadastro</Link>

    </div>
    

  )
}

export default Home