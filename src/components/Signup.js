import React from "react"
import './Signup.css'
import Crypto from '../assets/crypocel.png'

const Signup = () =>{
    return(
       <div className='signup'>
        <div className='container'>
            <div className='left'>
                <img src={Crypto} alt='' />
            </div>
        </div>
        <div className='right'>
            <h2>Ganhe renda passiva com criptomoedas.</h2>
            <p>Ganhe até 12% de recompensas anuais em mais de 30 ativos digitais.</p>
            <div className='input-container'>
                <input type='email' placeholder='Entre com email'/>
                <button className='btn'>Saiba Mais</button>
            </div>
        </div>

       </div>

    )
}

export default Signup