function Login() {
    return (

        

        <div className="container">
            <div className="card">
                <h2>Login</h2>
                <form action="#" method="POST">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" required />


                    <button type="submit">Logar</button>
                </form>
            </div>
        </div>
            )
}

            export default Login