import FormPost from './Form'
import './globals.css'


export const metadata = {
  title: 'my app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <FormPost />
        {children}
      </body>
    </html>
  )
}
