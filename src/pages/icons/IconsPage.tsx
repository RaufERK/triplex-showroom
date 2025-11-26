import {
  Title,
  Text,
  Caption,
  ETitleSize,
  ETextSize,
  ECaptionSize,
  EFontType,
} from '@sberbusiness/triplex-next'
import { Section, ExampleCard } from '../../components'
import { NodocumentsMrkIcon96, ConfirmloginMrkIcon128 } from '@sberbusiness/icons-next'
import styles from './IconsPage.module.css'

export const IconsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Title size={ETitleSize.H1}>Иконки @sberbusiness/icons-next</Title>
        <Text size={ETextSize.B1} type={EFontType.SECONDARY}>
          Небольшая галерея живых иконок из библиотеки @sberbusiness/icons-next и минимальные примеры
          их подключения в React + Triplex Next.
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
