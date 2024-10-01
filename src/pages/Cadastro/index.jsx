import { Link } from "react-router-dom"

function Cadastro() {
    return (

        <div>

          <h2>Cadastro</h2>

        <form action="" className='cadastro'>

          <input type="text" placeholder='Nome' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Senha' />
          <button>Cadastrar-se</button>

        </form>

        <Link to={"/login"}>Já tem uma conta? Faça login</Link>

      </div>
    )
}

export default Cadastro