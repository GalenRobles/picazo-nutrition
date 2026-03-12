# Picazo Supplements & More — Landing Page

Landing page oficial para Picazo Supplements, construida con **Next.js 14** y lista para subir a **Vercel**.

## 🚀 Cómo subir a Vercel

### Opción 1 — GitHub + Vercel (Recomendado)

1. Sube esta carpeta a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) y haz login
3. Haz clic en **"Add New Project"**
4. Importa tu repositorio de GitHub
5. Vercel detecta Next.js automáticamente — haz clic en **Deploy**
6. ¡Listo! Tu sitio estará en línea en ~2 minutos

### Opción 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
cd picazo-supplements
vercel
```

---

## ✏️ Personalizar antes de publicar

### 1. Número de WhatsApp
En `app/page.js`, busca:
```js
const whatsappNumber = '5218001234567' // placeholder
```
Cámbialo por tu número real (con código de país, sin espacios ni guiones).
Ejemplo para México: `521XXXXXXXXXX`

### 2. Instagram
Busca `picazo.supplements` y reemplaza con tu handle real.

### 3. Horario de atención
Busca `Lun–Sáb 9am–8pm` y ajusta según corresponda.

---

## 🛠 Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Google Fonts** (Bebas Neue + Barlow)
- Desplegado en **Vercel** (gratis)
