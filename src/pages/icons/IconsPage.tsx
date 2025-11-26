import React from 'react'
import {
  Title,
  Text,
  Caption,
  ETitleSize,
  ETextSize,
  ECaptionSize,
  EFontType,
} from '@sberbusiness/triplex-next'
// import { BookkeeperblackAccIcon64 } from '@sberbusiness/icons/BookkeeperblackAccIcon64'
import { Section, ExampleCard } from '../../components'
import {
  NodocumentsMrkIcon96,
  ConfirmloginMrkIcon128,
  GigaassistaintOtherBrdIcon20,
  BalanceStrokeNavIcon20,
  CardcreditmirMkrIcon32,
  TouchidMrkIcon96,
} from '@sberbusiness/icons-next'
import * as Icons from '@sberbusiness/icons-next'
import styles from './IconsPage.module.css'

const ICONS_BLACKLIST = new Set(['ThemeProvider', 'useTheme', 'EIconsTheme'])

export const IconsPage = () => {
  const iconEntries = Object.entries(Icons)
    .filter(([name]) => !ICONS_BLACKLIST.has(name))
    .sort(([a], [b]) => a.localeCompare(b))

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Title size={ETitleSize.H1}>Иконки @sberbusiness/icons-next</Title>
        <Text size={ETextSize.B1} type={EFontType.SECONDARY}>
          Небольшая галерея живых иконок из библиотеки @sberbusiness/icons-next
          и минимальные примеры их подключения в React + Triplex Next.
        </Text>
      </div>

      <Section
        id='gallery'
        title='Галерея иконок'
        description='Две живые и яркие иконки, которые гарантированно видны и подходят для демо.'
      >
        <div className={styles.iconsGrid}>
          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <NodocumentsMrkIcon96 />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              NodocumentsMrkIcon96
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <ConfirmloginMrkIcon128 />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              ConfirmloginMrkIcon128
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <CardcreditmirMkrIcon32 />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              CardcreditmirMkrIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <GigaassistaintOtherBrdIcon20 paletteIndex={5} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              GigaassistaintOtherBrdIcon20
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <BalanceStrokeNavIcon20 paletteIndex={5} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              BalanceStrokeNavIcon20
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <TouchidMrkIcon96 />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              TouchidMrkIcon96
            </Caption>
          </div>
        </div>
      </Section>

      <Section
        id='all-icons'
        title='Все иконки из @sberbusiness/icons-next'
        description='Полная галерея экспортируемых иконок из библиотеки.'
      >
        <div className={styles.iconsGrid}>
          {iconEntries.map(([name, IconComponent]) => {
            const Icon = IconComponent as any
            return (
              <div key={name} className={styles.iconCard}>
                <div className={styles.iconWrapper}>
                  {React.createElement(Icon, { paletteIndex: 0 })}
                </div>
                <Caption size={ECaptionSize.C1} className={styles.iconName}>
                  {name}
                </Caption>
              </div>
            )
          })}
        </div>
      </Section>

      <Section
        id='usage'
        title='Как подключать иконки'
        description='Простой пример того, как импортировать и использовать иконки из @sberbusiness/icons-next.'
      >
        <ExampleCard title='Импорт и использование'>
          <pre className={styles.code}>
            {`import { NodocumentsMrkIcon96, ConfirmloginMrkIcon128 } from '@sberbusiness/icons-next';

export const Example = () => (
  <>
    <NodocumentsMrkIcon96 />
    <ConfirmloginMrkIcon128 />
  </>
);`}
          </pre>
        </ExampleCard>
      </Section>
    </div>
  )
}
