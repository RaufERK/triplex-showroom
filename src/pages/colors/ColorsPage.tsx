import { Title, Text, ETitleSize, ETextSize, EFontType } from '@sberbusiness/triplex-next'
import { Section, ColorPalette } from '../../components'
import { colorPalettes } from '../../constants/colors'
import styles from './ColorsPage.module.css'

export const ColorsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Title size={ETitleSize.H1}>Цветовая система Triplex Next</Title>
        <Text size={ETextSize.B1} type={EFontType.SECONDARY}>
          Полная палитра из 110+ CSS-переменных для создания консистентного дизайна.
          Каждая палитра содержит 11 оттенков от самого тёмного (0) до самого светлого (100).
        </Text>
      </div>

      <Section
        id='brand'
        title='Брендовые цвета'
        description='Зелёные оттенки Сбербанка — основная цветовая гамма для акцентов и интерактивных элементов.'
      >
        <ColorPalette {...colorPalettes.brand} />
      </Section>

      <Section
        id='neutral'
        title='Нейтральные цвета'
        description='Серые оттенки для фонов, границ и разделителей. Используются для создания визуальной иерархии.'
      >
        <ColorPalette {...colorPalettes.neutral} />
      </Section>

      <Section
        id='text'
        title='Цвета текста'
        description='Тёмные нейтральные оттенки для основного текста, заголовков и описаний.'
      >
        <ColorPalette {...colorPalettes.darkNeutral} />
      </Section>

      <Section
        id='semantic'
        title='Семантические цвета'
        description='Цвета для передачи статусов и состояний: ошибки, успех, предупреждения и информация.'
      >
        <div className={styles.semanticGrid}>
          <ColorPalette {...colorPalettes.error} />
          <ColorPalette {...colorPalettes.success} />
          <ColorPalette {...colorPalettes.warning} />
          <ColorPalette {...colorPalettes.info} />
        </div>
      </Section>

      <Section
        id='usage'
        title='Примеры использования'
        description='Как применять цветовые переменные в CSS Modules вашего проекта.'
      >
        <div className={styles.examples}>
          <div className={styles.exampleCard}>
            <div className={styles.examplePreview} style={{ 
              background: 'var(--triplex-next-ColorBrand-50-1-4-0)',
              color: 'var(--triplex-next-ColorNeutral-100-1-4-0)'
            }}>
              <Text size={ETextSize.B2}>Брендовая кнопка</Text>
            </div>
            <pre className={styles.code}>
{`.button {
  background: var(--triplex-next-ColorBrand-50-1-4-0);
  color: var(--triplex-next-ColorNeutral-100-1-4-0);
}`}
            </pre>
          </div>

          <div className={styles.exampleCard}>
            <div className={styles.examplePreview} style={{ 
              background: 'var(--triplex-next-ColorNeutral-100-1-4-0)',
              border: '1px solid var(--triplex-next-ColorNeutral-60-1-4-0)',
              color: 'var(--triplex-next-ColorDarkNeutral-50-1-4-0)'
            }}>
              <Text size={ETextSize.B2}>Карточка</Text>
            </div>
            <pre className={styles.code}>
{`.card {
  background: var(--triplex-next-ColorNeutral-100-1-4-0);
  border: 1px solid var(--triplex-next-ColorNeutral-60-1-4-0);
  color: var(--triplex-next-ColorDarkNeutral-50-1-4-0);
}`}
            </pre>
          </div>

          <div className={styles.exampleCard}>
            <div className={styles.examplePreview} style={{ 
              background: 'var(--triplex-next-ColorError-90-1-4-0)',
              color: 'var(--triplex-next-ColorError-50-1-4-0)',
              border: '1px solid var(--triplex-next-ColorError-70-1-4-0)'
            }}>
              <Text size={ETextSize.B2}>⚠️ Уведомление об ошибке</Text>
            </div>
            <pre className={styles.code}>
{`.error {
  background: var(--triplex-next-ColorError-90-1-4-0);
  color: var(--triplex-next-ColorError-50-1-4-0);
  border: 1px solid var(--triplex-next-ColorError-70-1-4-0);
}`}
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}

