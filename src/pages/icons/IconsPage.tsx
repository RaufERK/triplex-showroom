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

  const groups: Record<string, typeof iconEntries> = {}

  const getGroupName = (name: string): string => {
    if (name.includes('NavIcon')) return 'Навигационные'
    if (name.includes('MkrIcon')) return 'Маркеры / иллюстрации'
    if (name.includes('PrdIcon')) return 'Продуктовые'
    if (name.includes('StsIcon')) return 'Статусы'
    return 'Прочие'
  }

  iconEntries.forEach((entry) => {
    const [name] = entry
    const group = getGroupName(name)
    if (!groups[group]) groups[group] = []
    groups[group].push(entry)
  })

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
        title='Все иконки по сериям'
        description='Полная галерея экспортируемых иконок из библиотеки, сгруппированная по семействам.'
      >
        {Object.entries(groups).map(([groupName, entries]) =>
          entries.length ? (
            <div key={groupName} className={styles.iconGroup}>
              <Title
                size={ETitleSize.H3}
                tag='h3'
                className={styles.iconGroupTitle}
              >
                {groupName}
              </Title>
              <div className={styles.iconGroupGrid}>
                {entries.map(([name, IconComponent]) => {
                  const Icon = IconComponent as any
                  return (
                    <div key={name} className={styles.iconRow}>
                      <div className={styles.iconRowIcon}>
                        {React.createElement(Icon, { paletteIndex: 5 })}
                      </div>
                      <Caption
                        size={ECaptionSize.C1}
                        className={styles.iconRowName}
                      >
                        {name}
                      </Caption>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null
        )}
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
