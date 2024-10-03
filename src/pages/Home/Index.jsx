import { Link } from "react-router-dom"

function Home() {
  return(

    <div className="container">

  < h2>Home</h2>


  <Link to={"/Cadastro"}> Realize seu cadastro</Link>

    </div>
    

  )
}

export default Home