import React from 'react'

const Contacto = () => {
    return (
        <div className='container mt-3'>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Correo electronico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">¿Cuales son tus dudas?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-dark'>Enviar</button>
        </div>
    )
}

export default Contacto
