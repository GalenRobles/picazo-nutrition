'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,162,39,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Picazo" width={48} height={48} className="rounded-full" style={{ background: 'white', padding: '4px' }} />
          <div>
            <div className="font-display text-xl tracking-widest text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.15em' }}>PICAZO</div>
            <div className="text-xs tracking-widest" style={{ color: 'var(--gold)', fontSize: '9px', letterSpacing: '0.3em' }}>NUTRITION & MORE</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Productos', 'Cómo funciona', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-').replace('ó', 'o').replace('é', 'e')}`}
              className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-yellow-400"
              style={{ color: 'rgba(245,245,240,0.6)', letterSpacing: '0.15em', fontSize: '11px' }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
            style={{
              background: 'var(--gold)',
              color: 'var(--black)',
              letterSpacing: '0.15em',
              fontSize: '11px',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
          >
            Hacer Pedido
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 transition-all" style={{ background: menuOpen ? 'var(--gold)' : 'white', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: menuOpen ? 'transparent' : 'white', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: menuOpen ? 'var(--gold)' : 'white', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid rgba(201,162,39,0.2)' }}>
          {['Productos', 'Cómo funciona', 'Contacto'].map(item => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2" style={{ color: 'rgba(245,245,240,0.7)', letterSpacing: '0.15em', fontSize: '12px' }}>
              {item}
            </a>
          ))}
          <a href="#contacto"
            className="text-center py-3 text-xs tracking-widest uppercase font-semibold"
            style={{ background: 'var(--gold)', color: 'var(--black)', letterSpacing: '0.15em' }}
            onClick={() => setMenuOpen(false)}>
            Hacer Pedido
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--black)' }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,162,39,0.02) 80px, rgba(201,162,39,0.02) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,162,39,0.02) 80px, rgba(201,162,39,0.02) 81px)' }} />
      </div>

      {/* Grand opening badge */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-semibold"
          style={{ border: '1px solid rgba(201,162,39,0.5)', color: 'var(--gold)', background: 'rgba(201,162,39,0.06)', letterSpacing: '0.25em', fontSize: '10px' }}>
          <span style={{ color: 'var(--gold)' }}>✦</span>
          Gran Inauguración
          <span style={{ color: 'var(--gold)' }}>✦</span>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-40 pb-16">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-scale-in animate-float">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-glow" style={{ background: 'rgba(201,162,39,0.1)' }} />
            <Image
              src="/logo.png"
              alt="Picazo Nutrition"
              width={160}
              height={160}
              className="relative z-10 rounded-full"
              style={{ background: 'white', padding: '12px' }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: 0.9, letterSpacing: '0.05em' }}>
          <span className="block text-white">PICAZO</span>
          <span className="block gold-text">NUTRITION</span>
          <span className="block text-white" style={{ fontSize: '0.45em', letterSpacing: '0.3em', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>& MORE</span>
        </h1>

        <p className="mt-8 animate-fade-up delay-200 max-w-lg mx-auto"
          style={{ color: 'rgba(245,245,240,0.55)', fontSize: '15px', lineHeight: 1.8, letterSpacing: '0.05em' }}>
          Suplementos de calidad premium, ahora disponibles en tu ciudad.
          Hacemos el pedido por ti y lo entregamos en tu puerta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-400">
          <a
            href="#contacto"
            className="px-10 py-4 text-sm tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--gold)', color: 'var(--black)', letterSpacing: '0.2em', fontSize: '12px' }}
            onMouseEnter={e => { e.target.style.background = 'var(--gold-light)'; e.target.style.boxShadow = '0 0 40px rgba(201,162,39,0.4)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.boxShadow = 'none' }}
          >
            Hacer mi pedido
          </a>
          <a
            href="#productos"
            className="px-10 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300"
            style={{ border: '1px solid rgba(201,162,39,0.4)', color: 'rgba(245,245,240,0.8)', letterSpacing: '0.2em', fontSize: '12px' }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(201,162,39,0.4)'; e.target.style.color = 'rgba(245,245,240,0.8)' }}
          >
            Ver productos
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-up delay-600">
          {[
            { icon: '🚚', label: 'Entrega a domicilio' },
            { icon: '✓', label: 'Marcas originales' },
            { icon: '💬', label: 'Asesoría incluida' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ color: 'rgba(245,245,240,0.4)', letterSpacing: '0.15em', fontSize: '10px' }}>
              <span style={{ color: 'var(--gold)', fontSize: '14px' }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(245,245,240,0.3)', fontSize: '9px', letterSpacing: '0.3em' }}>Scroll</span>
      </div>
    </section>
  )
}

// ── Products ─────────────────────────────────────────────────────────────────
const products = [
  { emoji: '🥛', name: 'Proteínas', desc: 'Whey, caseína, vegana. Las mejores marcas del mercado para tu objetivo.', tag: 'Más vendido' },
  { emoji: '⚡', name: 'Pre-Workout', desc: 'Energía y enfoque para entrenamientos de alto rendimiento.', tag: null },
  { emoji: '💪', name: 'Creatina', desc: 'Monohidrato puro. Fuerza, potencia y recuperación muscular.', tag: null },
  { emoji: '🔥', name: 'Fat Burners', desc: 'Termogénicos y quemadores para acelerar tu metabolismo.', tag: null },
  { emoji: '💊', name: 'Vitaminas & Salud', desc: 'Multivitamínicos, omega-3, zinc y más para tu bienestar diario.', tag: null },
  { emoji: '🌿', name: 'Aminoácidos', desc: 'BCAA, EAA, glutamina. Recuperación y crecimiento muscular.', tag: 'Nuevo' },
]

function Products() {
  return (
    <section id="productos" className="py-28 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.35em', fontSize: '10px' }}>Catálogo</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, letterSpacing: '0.05em', color: 'white' }}>
            LO QUE <span className="gold-text">TENEMOS</span>
          </h2>
          <p className="mt-4 max-w-md mx-auto" style={{ color: 'rgba(245,245,240,0.45)', fontSize: '14px', lineHeight: 1.8 }}>
            Manejamos las mejores marcas. Si no ves lo que buscas, escríbenos — lo conseguimos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(({ emoji, name, desc, tag }, i) => (
            <div
              key={name}
              className="card-hover relative p-6 cursor-default"
              style={{
                background: 'var(--dark-2)',
                border: '1px solid rgba(255,255,255,0.06)',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,162,39,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              {tag && (
                <span className="absolute top-4 right-4 text-xs px-2 py-1 tracking-widest uppercase"
                  style={{ background: 'rgba(201,162,39,0.15)', color: 'var(--gold)', fontSize: '9px', letterSpacing: '0.2em', border: '1px solid rgba(201,162,39,0.3)' }}>
                  {tag}
                </span>
              )}
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-lg font-semibold mb-2 tracking-wide" style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>{name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.45)', fontSize: '13px' }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm" style={{ color: 'rgba(245,245,240,0.4)', fontSize: '13px' }}>
            ¿Buscas algo específico?{' '}
            <a href="#contacto" style={{ color: 'var(--gold)', textDecoration: 'underline', textDecorationColor: 'rgba(201,162,39,0.4)' }}>
              Escríbenos y lo cotizamos.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// ── How it works ─────────────────────────────────────────────────────────────
const steps = [
  { n: '01', title: 'Contáctanos', desc: 'Escríbenos por Instagram o WhatsApp con los productos que necesitas.' },
  { n: '02', title: 'Cotizamos', desc: 'Te enviamos precios y disponibilidad al instante. Sin burocracia.' },
  { n: '03', title: 'Confirmas', desc: 'Apruebas tu pedido y acordamos el método de pago.' },
  { n: '04', title: 'Entregamos', desc: 'Entregas el mismo día en La Laguna y envíos seguros a todo México y USA' },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6" style={{ background: 'var(--black)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.35em', fontSize: '10px' }}>Proceso</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, letterSpacing: '0.05em', color: 'white' }}>
            ¿CÓMO <span className="gold-text">FUNCIONA?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="relative p-8 group" style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(201,162,39,0.1)' }}>
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-px h-16 translate-x-1/2" style={{ background: 'rgba(201,162,39,0.2)' }} />
              )}
              <div className="text-6xl font-bold mb-4 transition-colors duration-300 group-hover:text-yellow-400"
                style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'rgba(201,162,39,0.15)', letterSpacing: '-0.02em' }}>
                {n}
              </div>
              <h3 className="font-semibold mb-2 tracking-wide" style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', letterSpacing: '0.1em' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.45)', fontSize: '13px' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Why us ────────────────────────────────────────────────────────────────────
const reasons = [
  { icon: '👑', title: 'Productos originales', desc: 'Solo trabajamos con marcas certificadas y distribuidores oficiales.' },
  { icon: '⚡', title: 'Respuesta rápida', desc: 'Te contestamos en minutos, no en horas. Tu tiempo vale.' },
  { icon: '🚗', title: 'Entrega a tu puerta', desc: 'No tienes que moverte. Nosotros llevamos tu pedido donde estés.' },
  { icon: '🤝', title: 'Asesoría personalizada', desc: 'No solo vendemos — te orientamos para que elijas lo correcto.' },
]

function WhyUs() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--dark-2)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.35em', fontSize: '10px' }}>Por qué elegirnos</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, letterSpacing: '0.05em', color: 'white' }}>
            LA DIFERENCIA <span className="gold-text">PICAZO NUTRITION</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 p-6 card-hover"
              style={{ background: 'var(--dark)', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,162,39,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div className="text-3xl flex-shrink-0 mt-1">{icon}</div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '17px', letterSpacing: '0.1em' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.45)', fontSize: '13px' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA / Contact ─────────────────────────────────────────────────────────────
function Contact() {
  const whatsappMsg = encodeURIComponent('Hola! Quiero hacer un pedido en Picazo Nutrition 💪')
  const whatsappNumber = '528713968269' // placeholder

  return (
    <section id="contacto" className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--black)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)', letterSpacing: '0.35em', fontSize: '10px' }}>Pedidos</p>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '0.05em', color: 'white' }}>
          LISTO PARA<br /><span className="gold-text">EMPEZAR?</span>
        </h2>

        <p className="mt-6 mb-10" style={{ color: 'rgba(245,245,240,0.5)', fontSize: '15px', lineHeight: 1.8 }}>
          Escríbenos directamente. Cotizamos sin compromiso y entregamos en tu ciudad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: '#25D366', color: 'white', letterSpacing: '0.15em', fontSize: '12px' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(37,211,102,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://instagram.com/picazonutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', color: 'white', letterSpacing: '0.15em', fontSize: '12px' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(253,29,29,0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
        </div>

        <p className="mt-8 text-xs tracking-widest" style={{ color: 'rgba(245,245,240,0.25)', letterSpacing: '0.15em', fontSize: '11px' }}>
          Horario de atención: Lun–Dom 8am–8pm
        </p>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(201,162,39,0.1)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Picazo" width={36} height={36} className="rounded-full" style={{ background: 'white', padding: '3px' }} />
          <div>
            <div className="text-sm font-semibold" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.2em', color: 'white' }}>PICAZO NUTRITION</div>
            <div className="text-xs" style={{ color: 'var(--gold)', fontSize: '9px', letterSpacing: '0.3em' }}>& MORE</div>
          </div>
        </div>

        <p className="text-xs text-center" style={{ color: 'rgba(245,245,240,0.25)', fontSize: '11px', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} Picazo Nutrition. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a href="https://instagram.com/picazonutrition" target="_blank" rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100" style={{ color: 'rgba(245,245,240,0.3)', fontSize: '12px', letterSpacing: '0.1em' }}>
            Instagram
          </a>
          <a href="#contacto" className="transition-opacity hover:opacity-100" style={{ color: 'rgba(245,245,240,0.3)', fontSize: '12px', letterSpacing: '0.1em' }}>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <HowItWorks />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
