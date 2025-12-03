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
        description='Несколько ярких иконок из разных семейств, которые гарантированно есть в последней версии @sberbusiness/icons-next.'
      >
        <div className={styles.iconsGrid}>
          {[
            Icons.NodocumentsMrkIcon96,
            Icons.ConfirmloginMrkIcon128,
            Icons.CardcreditmirMkrIcon32,
            Icons.GigaassistaintOtherBrdIcon20,
            Icons.BalanceStrokeNavIcon20,
            Icons.TouchidMrkIcon96,
          ].map((IconComponent, index) => {
            if (!IconComponent) return null
            const Icon = IconComponent as React.ComponentType<{
              paletteIndex?: number
            }>
            const name =
              IconComponent.displayName ||
              IconComponent.name ||
              [
                'NodocumentsMrkIcon96',
                'ConfirmloginMrkIcon128',
                'CardcreditmirMkrIcon32',
                'GigaassistaintOtherBrdIcon20',
                'BalanceStrokeNavIcon20',
                'TouchidMrkIcon96',
              ][index]

            return (
              <div key={name} className={styles.iconCard}>
                <div className={styles.iconWrapper}>
                  <Icon paletteIndex={5} />
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
                  const Icon = IconComponent as React.ComponentType<{
                    paletteIndex?: number
                  }>
                  return (
                    <div key={name} className={styles.iconCard}>
                      <div className={styles.iconWrapper}>
                        <Icon paletteIndex={5} />
                      </div>
                      <Caption
                        size={ECaptionSize.C1}
                        className={styles.iconName}
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
