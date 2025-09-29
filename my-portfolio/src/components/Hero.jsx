import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Hero(){
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Olá — eu sou a Luisa Malta</h1>
          <p className="subtitle">Desenvolvedora web em formação. Crio interfaces acessíveis e experiências limpas para web.</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">Ver Projetos</a>
            <a className="btn btn-outline" href="#contact">Contato</a>
          </div>

          <div className="socials">
            <a href="https://github.com/lulumalta" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://linkedin.com/in/Luisa Malta" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://instagram.com/_luisamalta.h" target="_blank" rel="noreferrer"><FaInstagram/></a>
          </div>
        </div>

        <div className="hero-photo">
          
          <img src="/src/assets/profile.jpg" alt="Luisa Malta" />
        </div>
      </div>
    </section>
  )
}
