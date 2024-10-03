import { Link } from "react-router-dom"
import "./file.css"

function Cadastro() {
    return (
          <div className="container">
        <div className="card">
            <h2>Cadastrar</h2>
            <form action="#" method="POST">
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label for="password">Senha</label>
                <input type="password" id="password" name="password" required/>

                <label for="confirm-password">Repita sua Senha</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>

                <button type="submit">Cadastrar-se</button>
            </form>
            <Link to={"/login"}>Já tem uma conta? Faça login</Link>
        </div>
      </div>
    )
}

export default Cadastro