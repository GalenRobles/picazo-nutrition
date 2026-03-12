import './globals.css'

export const metadata = {
  title: 'Picazo Nutrition & More | Inauguración',
  description: 'Tu tienda de suplementos de confianza. Pedidos a domicilio, entregas directas. Calidad premium al mejor precio.',
  keywords: 'suplementos, proteína, creatina, pre-workout, vitaminas, Picazo Nutrition',
  openGraph: {
    title: 'Picazo Nutrition & More',
    description: 'Suplementos premium. Pedidos y entregas a domicilio.',
    images: ['/logo.png'],
    icon: '/logo.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
