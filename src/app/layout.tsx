import variables from './styles/settings.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={variables.main}>
        {children}
      </body>
    </html>
  );
}
