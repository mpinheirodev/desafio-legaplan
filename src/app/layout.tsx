
import variables from './styles/settings.module.scss'
import Icon from '../../public/icon.svg'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={variables.main}>
        {children}
      </body>
    </html>
  );
}
