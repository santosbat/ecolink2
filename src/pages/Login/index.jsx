import { SlArrowLeft } from "react-icons/sl"; // importando icone
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // importando o hook useNavigate

function Login() {
    const navigate = useNavigate(); // criando a função navigate
    return (
        



        <div className="container">

            <div className="home-container">
                <button className="button-home" onClick={() => navigate(-1)}>
                    <Link to="/Home">
                        <SlArrowLeft className="home-icon" />
                        {/* Ícone de seta para voltar */}
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