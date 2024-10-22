import { Link } from "react-router-dom" // importando link
import "./file.css" // importando css
import {FaHome} from "react-icons/fa" // importando icone
function Cadastro() {
    return (
          <div className="container">
            
        <div className="card">
          
        <div className="homebt-container">
          <button className="button-home">
            <Link to="/Home">
            <FaHome className="home-icon" /> 
            {/* Ícone de casa */}
            </Link>
            </button>
          
        </div>
            <h2 className="h2_cad">Cadastrar</h2>



            <form className="formcad" action="#" method="POST">
                <label className="la" htmlFor="name">Nome</label>
                <input className="it" type="text" id="name" name="name" required/>

                <label className="la" htmlFor="email">Email</label>
                <input className="it" type="email" id="email" name="email" required/>

                <label className="la" htmlFor="password">Senha</label>
                <input className="it" type="password" id="password" name="password" required/>

                <label className="la" htmlFor="confirm-password">Repita sua Senha</label>
                <input className="it" type="password" id="confirm-password" name="confirm-password" required/>

                <button className="but" type="submit">Cadastrar-se</button>
            </form>

           
            <Link to={"/login"}>Já tem uma conta? Faça login</Link>
        </div>
      </div>
    )
}

export default Cadastro