"use client"

import Image from 'next/image'
import styles from '../../styles/styles.module.scss'
import Logo from '../../../../src/assets/logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt='Logo Legaplan' />
      <h1 className={styles.welcome}>Bem-vindo de volta, Marcus</h1>
      <p className={styles.date}>Segunda, 1 de dezembro de 2025</p>
    </header>
  )
}