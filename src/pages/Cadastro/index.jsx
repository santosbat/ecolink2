import { Link } from "react-router-dom" // importando link
import "./file.css" // importando css
import {FaHome} from "react-icons/fa" // importando icone
function Cadastro() {
    return (
          <div className="container">
            
        <div className="card">
          
        <div className="home-container">
          <button className="button-home">
            <Link to="/Home">
            <FaHome className="home-icon" /> 
            {/* Ícone de casa */}
            </Link>
            </button>
          
        </div>
            <h2 className="h2_cad">Cadastrar</h2>



            <form action="#" method="POST">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" required/>

                <label htmlFor="confirm-password">Repita sua Senha</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>

                <button type="submit">Cadastrar-se</button>
            </form>

           
            <Link to={"/login"}>Já tem uma conta? Faça login</Link>
        </div>
      </div>
    )
}

export default Cadastro