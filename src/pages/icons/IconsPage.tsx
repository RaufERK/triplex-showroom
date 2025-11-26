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
import {
  BalanceStrokeNavIcon32,
  BellStrokeNavIcon32,
  MenuStrokeNavIcon32,
  ProfilecircleStrokeNavIcon32,
  RubleStrokeMkrIcon32,
  NodocumentsMrkIcon96,
  ConfirmloginMrkIcon128,
  BankingsupportStrokePrdIcon32,
  BenefittyStrokePrdIcon32,
  AcredetivesinkassoStrokePrdIcon32,
} from '@sberbusiness/icons-next'
import styles from './IconsPage.module.css'

export const IconsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Title size={ETitleSize.H1}>Иконки @sberbusiness/icons</Title>
        <Text size={ETextSize.B1} type={EFontType.SECONDARY}>
          Библиотека React компонентов SVG иконок из интернет-банка СберБизнес.
          Иконки доступны в разных размерах: 20px, 24px, 32px, 128px.
        </Text>
      </div>

      <Section
        id='gallery'
        title='Галерея иконок'
        description='Примеры иконок из библиотеки @sberbusiness/icons-next. Нажмите на иконку чтобы скопировать название.'
      >
        <div className={styles.iconsGrid}>
          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <BalanceStrokeNavIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              BalanceStrokeNavIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <BellStrokeNavIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              BellStrokeNavIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <MenuStrokeNavIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              MenuStrokeNavIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <ProfilecircleStrokeNavIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              ProfilecircleStrokeNavIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <RubleStrokeMkrIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              RubleStrokeMkrIcon32
            </Caption>
          </div>

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
              <BankingsupportStrokePrdIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              BankingsupportStrokePrdIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <BenefittyStrokePrdIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              BenefittyStrokePrdIcon32
            </Caption>
          </div>

          <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
              <AcredetivesinkassoStrokePrdIcon32 paletteIndex={0} />
            </div>
            <Caption size={ECaptionSize.C1} className={styles.iconName}>
              AcredetivesinkassoStrokePrdIcon32
            </Caption>
          </div>
        </div>
      </Section>

      <Section
        id='installation'
        title='Установка и подключение'
        description='Как установить библиотеку и подключить стили.'
      >
        <ExampleCard title='Установка'>
          <pre className={styles.code}>{`npm install @sberbusiness/icons`}</pre>
        </ExampleCard>

        <ExampleCard title='Подключение стилей'>
          <pre className={styles.code}>
            {`import '@sberbusiness/icons/css/icons.css';`}
          </pre>
        </ExampleCard>
      </Section>

      <Section
        id='import'
        title='Способы импорта'
        description='Различные варианты импорта иконок в ваш проект.'
      >
        <ExampleCard title='Импорт отдельной иконки'>
          <pre className={styles.code}>
            {`import { AccountSrvIcon32 } from '@sberbusiness/icons';

`}
          </pre>
        </ExampleCard>

        <ExampleCard title='Импорт нескольких иконок'>
          <pre className={styles.code}>
            {`import {
  AccountSrvIcon32,
  SettingsSrvIcon24,
  SearchSrvIcon20
} from '@sberbusiness/icons';`}
          </pre>
        </ExampleCard>

        <ExampleCard title='Импорт с алиасом'>
          <pre className={styles.code}>
            {`import { AccountSrvIcon32 as AccountIcon } from '@sberbusiness/icons';

<AccountIcon />`}
          </pre>
        </ExampleCard>
      </Section>

      {/* Остальные секции опущены, чтобы код страницы оставался простым и служил базовой инструкцией. */}
    </div>
  )
}
