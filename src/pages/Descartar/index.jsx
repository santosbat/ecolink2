function Descartar() {

    return (
        <div className="principal">
            
            <div className="bloco">
                <form action="">
                <label htmlFor="name">Localização</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Contato</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Horario para coleta</label>
                <input type="password" id="password" name="password" required/>

                <label htmlFor="confirm-password"></label>
                <input type="password" id="confirm-password" name="confirm-password" required/>

                <button type="submit">Confirmar</button>
                </form>
            </div>

        </div>
    )

}

export default Descartar