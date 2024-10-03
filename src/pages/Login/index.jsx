import { SlArrowLeft } from "react-icons/sl"; // importando icone
import { Link } from "react-router-dom";

function Login() {
    return (

        

        <div className="container">

<div className="home-container">
          <button className="button-home">
            <Link to="/Cadastro">
            <SlArrowLeft className="home-icon" /> 
            {/* Ícone de casa */}
            </Link>
            </button>
          
        </div>



            <div className="card">
      
                <h2>Login</h2>
                <form action="#" method="POST">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" required />


                    <button type="submit">Logar</button>
                </form>
            </div>
        </div>
            )
}

            export default Login