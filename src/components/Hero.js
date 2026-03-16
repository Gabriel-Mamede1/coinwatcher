import React from "react"
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='left'>
                    <p>Compre e venda criptomoedas 24 horas por dia, 7 dias por semana, usando sua conta de aposentadoria.</p>
                    <h1>Invista em criptomoedas com seu IRA (Conta Individual de Aposentadoria).</h1>
                    <p>Compra, venda e armazene centenas de criptomoedas.</p>
                    <div className='input-conteiner'>
                        <input type='email' placeholder='Entre com email'/>
                        <button className='btn'>Saiba Mais</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero;