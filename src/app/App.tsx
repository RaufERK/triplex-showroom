import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Title, Text, ETitleSize, ETextSize, EFontType } from '@sberbusiness/triplex-next'
import { HomePage } from '../pages/home'
import { ColorsPage } from '../pages/colors'
import styles from './App.module.css'
import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Title size={ETitleSize.H2} tag='h1'>
              Triplex Next UI Kit
            </Title>
            <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
              Демонстрация ключевых компонентов дизайн-системы Triplex Next в контексте React + TypeScript.
            </Text>
          </div>
          <nav className={styles.nav}>
            <Link to='/' className={styles.navLink}>
              <Text tag='span' size={ETextSize.B3} type={EFontType.PRIMARY}>
                🏠 Главная
              </Text>
            </Link>
            <Link to='/colors' className={styles.navLink}>
              <Text tag='span' size={ETextSize.B3} type={EFontType.PRIMARY}>
                🎨 Цвета
              </Text>
            </Link>
          </nav>
        </aside>
        <main className={styles.content}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/colors' element={<ColorsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

