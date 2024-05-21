import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Retriever',
  description: 'The workout calendar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
