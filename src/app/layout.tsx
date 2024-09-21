'use client'
import variables from './styles/settings.module.scss'
import Icon from '../../public/icon.svg'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet='utf-8'/>
        <link rel="shortcut icon" href={Icon} type="image/x-icon" />
        <title>FocalPoint</title>
      </head>
      <body className={variables.main}>
        {children}
      </body>
    </html>
  );
}
