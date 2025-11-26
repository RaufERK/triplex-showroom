import { Title, Text, ETitleSize, ETextSize, EFontType } from '@sberbusiness/triplex-next'
import { Section, ExampleCard } from '../../components'
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
        id='installation'
        title='Установка и подключение'
        description='Как установить библиотеку и подключить стили.'
      >
        <ExampleCard title='Установка'>
          <pre className={styles.code}>
{`npm install @sberbusiness/icons`}
          </pre>
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

<AccountSrvIcon32 />`}
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

      <Section
        id='sizes'
        title='Размеры иконок'
        description='Иконки доступны в разных размерах: 20px, 24px, 32px, 128px.'
      >
        <ExampleCard title='Размеры иконок'>
          <div className={styles.sizesDemo}>
            <div className={styles.sizeItem}>
              <div className={styles.iconPlaceholder}>20px</div>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                *Icon20
              </Text>
            </div>
            <div className={styles.sizeItem}>
              <div className={styles.iconPlaceholder}>24px</div>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                *Icon24
              </Text>
            </div>
            <div className={styles.sizeItem}>
              <div className={styles.iconPlaceholder}>32px</div>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                *Icon32
              </Text>
            </div>
            <div className={styles.sizeItem}>
              <div className={styles.iconPlaceholder}>128px</div>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                *Icon128
              </Text>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard title='Пример использования разных размеров'>
          <pre className={styles.code}>
{`import {
  AccountSrvIcon20,
  AccountSrvIcon24,
  AccountSrvIcon32,
  AccountSrvIcon128
} from '@sberbusiness/icons';

<div>
  <AccountSrvIcon20 />
  <AccountSrvIcon24 />
  <AccountSrvIcon32 />
  <AccountSrvIcon128 />
</div>`}
          </pre>
        </ExampleCard>
      </Section>

      <Section
        id='types'
        title='Типы иконок'
        description='Иконки имеют разные типы: Srv (сервисные), Prd (продуктовые), Nav (навигационные), Mrk (маркетинговые), Brd (брендовые).'
      >
        <ExampleCard title='Типы иконок'>
          <div className={styles.typesList}>
            <div className={styles.typeItem}>
              <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
                Srv
              </Text>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                Сервисные иконки (AccountSrvIcon32)
              </Text>
            </div>
            <div className={styles.typeItem}>
              <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
                Prd
              </Text>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                Продуктовые иконки (AccountcontrolPrdIcon20)
              </Text>
            </div>
            <div className={styles.typeItem}>
              <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
                Nav
              </Text>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                Навигационные иконки (AiagentsNavIcon20)
              </Text>
            </div>
            <div className={styles.typeItem}>
              <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
                Mrk
              </Text>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                Маркетинговые иконки (AccountgosMrkIcon128)
              </Text>
            </div>
            <div className={styles.typeItem}>
              <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
                Brd
              </Text>
              <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                Брендовые иконки (AirbnbBrdIcon32)
              </Text>
            </div>
          </div>
        </ExampleCard>
      </Section>

      <Section
        id='examples'
        title='Примеры использования'
        description='Практические примеры использования иконок в компонентах.'
      >
        <ExampleCard title='Иконка в кнопке'>
          <pre className={styles.code}>
{`import { SettingsSrvIcon24 } from '@sberbusiness/icons';
import { Button } from '@sberbusiness/triplex-next';

<Button icon={<SettingsSrvIcon24 />}>
  Настройки
</Button>`}
          </pre>
        </ExampleCard>

        <ExampleCard title='Иконка в списке'>
          <pre className={styles.code}>
{`import { AccountSrvIcon32 } from '@sberbusiness/icons';

<ListItem>
  <AccountSrvIcon32 />
  <Text>Мой счёт</Text>
</ListItem>`}
          </pre>
        </ExampleCard>

        <ExampleCard title='Иконка с кастомными стилями'>
          <pre className={styles.code}>
{`import { SearchSrvIcon20 } from '@sberbusiness/icons';

<SearchSrvIcon20 
  style={{ 
    color: 'var(--triplex-next-ColorBrand-50-1-1-1)',
    marginRight: '8px'
  }} 
/>`}
          </pre>
        </ExampleCard>
      </Section>

      <Section
        id='search'
        title='Поиск иконок'
        description='Как найти нужную иконку в библиотеке.'
      >
        <ExampleCard title='Список всех иконок'>
          <pre className={styles.code}>
{`# В терминале проекта
ls node_modules/@sberbusiness/icons/*.js | grep Icon

# Или в IDE
node_modules/@sberbusiness/icons/`}
          </pre>
        </ExampleCard>

        <ExampleCard title='Поиск по названию'>
          <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
            Иконки названы по паттерну: <code className={styles.inlineCode}>[Название][Тип]Icon[Размер]</code>
          </Text>
          <pre className={styles.code}>
{`Примеры:
- AccountSrvIcon32 (Аккаунт, сервисная, 32px)
- SettingsNavIcon24 (Настройки, навигационная, 24px)
- SearchSrvIcon20 (Поиск, сервисная, 20px)`}
          </pre>
        </ExampleCard>
      </Section>
    </div>
  )
}

