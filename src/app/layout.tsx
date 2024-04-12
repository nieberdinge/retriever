import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import HomeNavbar from './components/HomeNavbar';

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
        <HomeNavbar />
        {children}
      </body>
    </html>
  )
}
