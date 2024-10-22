import { SlArrowLeft } from "react-icons/sl"; // importando icone
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // importando o hook useNavigate
import "./log.css" // importando css

function Login() {
    const navigate = useNavigate(); // criando a função navigate
    return (
        



        



            <div className="container_log">

                <div className="card_log">

                <div className="back-container">
                <Link to="/Home" className="button-back">
                    <SlArrowLeft className="back-icon" />
                    {/* Ícone de seta para voltar */}
                </Link>


                </div>

                <h2 className="h2_log">Login</h2>
                <form className="formlog" action="#" method="POST">
                    <label className=".la_log" htmlFor="email">Email</label>
                    <input className="it_log" type="email" id="email" name="email" required />

                    <label className=".la_log" htmlFor="password">Senha</label>
                    <input className="it_log" type="password" id="password" name="password" required />


                    <button className="but_log" type="submit">Logar</button>
                </form>
            </div>
        </div>
    )
}

export default Login