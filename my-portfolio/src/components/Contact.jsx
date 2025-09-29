import React, { useState } from 'react'

export default function Contact(){
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Contato via portfólio')
    const body = encodeURIComponent(`Email: ${email}\n\n${message}`)
    window.location.href = `mailto:luisadocarmo0305@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Seu email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <textarea placeholder="Mensagem" value={message} onChange={e=>setMessage(e.target.value)} required />
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
