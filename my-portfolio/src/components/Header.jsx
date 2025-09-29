import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#hero">Luisa<span>Malta</span></a>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </nav>

        <div className="header-right">
          <a href="https://github.com/lulumalta" target="_blank" rel="noreferrer" className="icon-btn" aria-label="github">
            <FaGithub />
          </a>
          <button className="nav-toggle" onClick={()=>setOpen(!open)} aria-label="menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
