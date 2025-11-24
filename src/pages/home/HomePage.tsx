import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import {
  AlertProcess,
  Button,
  ButtonIcon,
  Caption,
  CardStatic,
  Checkbox,
  Gap,
  Island,
  List,
  ListItem,
  LoaderSmall,
  LoaderMiddle,
  MaskedField,
  Pagination,
  Radio,
  SegmentedControl,
  SelectExtendedField,
  Skeleton,
  Text,
  TextField,
  Title,
  EAlertType,
  EButtonIconShape,
  EComponentSize,
  EButtonTheme,
  ECaptionSize,
  ECardTheme,
  EFontType,
  EIslandType,
  ELoaderSmallTheme,
  ESegmentedControlSize,
  ESegmentedControlTheme,
  ESegmentedControlType,
  ETextSize,
  ETitleSize,
} from '@sberbusiness/triplex-next'
import {
  ArrowrightStrokeSrvIcon24,
  HeartStrokeSrvIcon24,
  SearchStrokeSrvIcon24,
  SettingsStrokeSrvIcon24,
} from '@sberbusiness/icons-next'
import { Section, ExampleCard } from '../../components'
import { industries, insightTiles, payments, sectionLinks, phoneMask, tariffLabels } from '../../constants'
import { getStatusTone } from '../../utils/status'
import { type TariffValue, type RoleValue } from '../../types'
import styles from './HomePage.module.css'

export const HomePage = () => {
  const [profileName, setProfileName] = useState('Анна Смирнова')
  const [phone, setPhone] = useState('+7 (921) 234-56-78')
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [notifySms, setNotifySms] = useState(false)
  const [role, setRole] = useState<RoleValue>('owner')
  const [tariff, setTariff] = useState<TariffValue>('standard')
  const [industry, setIndustry] = useState(industries[0])
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [alertVisible, setAlertVisible] = useState(true)
  const [currentPage, setCurrentPage] = useState(2)
  const [pageSize, setPageSize] = useState(20)
  const [isWidgetLoading, setIsWidgetLoading] = useState(false)
  const [widgetMessage, setWidgetMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!isWidgetLoading) {
      return
    }
    const timer = window.setTimeout(() => {
      setIsWidgetLoading(false)
      setWidgetMessage('Синхронизация завершена — все данные обновлены.')
    }, 2400)
    return () => {
      window.clearTimeout(timer)
    }
  }, [isWidgetLoading])

  const handleProfileSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const notifications = [notifyEmail && 'e-mail', notifySms && 'SMS'].filter(Boolean).join(', ') || 'выключены'
    const roleLabel = role === 'owner' ? 'владелец' : 'менеджер'
    setFormMessage(`Настройки сохранены: уведомления ${notifications}, роль — ${roleLabel}, тариф — ${tariffLabels[tariff]}.`)
  }

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as RoleValue)
  }

  const handleSync = () => {
    setWidgetMessage(null)
    setIsWidgetLoading(true)
  }

  return (
    <>
      <nav className={styles.quickNav}>
        {sectionLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={styles.quickLink}>
            {link.title}
          </a>
        ))}
      </nav>
      <div className={styles.content}>
        <Section
          id='typography'
          title='Типографика'
          description='Готовые компоненты для заголовков, основного текста и служебных подписей — всё по фирменной шкале.'
        >
          <ExampleCard title='Заголовки'>
            <div className='stack'>
              <Title size={ETitleSize.H1} tag='p'>
                H1 — витрина продукта
              </Title>
              <Title size={ETitleSize.H2} tag='p'>
                H2 — раздел страницы
              </Title>
              <Title size={ETitleSize.H3} tag='p'>
                H3 — карточки и блоки
              </Title>
            </div>
          </ExampleCard>
          <ExampleCard title='Основной текст'>
            <div className='stack'>
              <Text size={ETextSize.B1}>B1 — основной абзац для ключевых сообщений.</Text>
              <Text size={ETextSize.B2} type={EFontType.SECONDARY}>
                B2 — дополнительная информация и комментарии.
              </Text>
              <Text size={ETextSize.B3} type={EFontType.DISABLED}>
                B3 — подписи и служебные строки.
              </Text>
            </div>
          </ExampleCard>
          <ExampleCard title='Caption и статусы'>
            <div className='stack stack--tight'>
              <Caption size={ECaptionSize.C1}>C1 — пояснения к элементам интерфейса.</Caption>
              <Caption size={ECaptionSize.C2} type={EFontType.BRAND}>
                C2 — акцентная подсказка бренда.
              </Caption>
              <Text size={ETextSize.B3} type={EFontType.SUCCESS}>
                Успешный статус операции
              </Text>
              <Text size={ETextSize.B3} type={EFontType.WARNING}>
                Требуется внимание
              </Text>
            </div>
          </ExampleCard>
          <ExampleCard
            title='Расширенный селект'
            description='Комбинированный выпадающий список с клавиатурной навигацией и темизацией из Triplex Next.'
          >
            <SelectExtendedField
              className='select-extended'
              renderTarget={({ opened, setOpened }) => (
                <SelectExtendedField.Target
                  fieldLabel='Отрасль бизнеса'
                  label={industry.label}
                  placeholder='Выберите направление'
                  opened={opened}
                  setOpened={setOpened}
                />
              )}
            >
              {({ opened, setOpened, dropdownRef, targetRef }) => (
                <SelectExtendedField.Dropdown
                  forwardedRef={dropdownRef}
                  opened={opened}
                  setOpened={setOpened}
                  targetRef={targetRef}
                >
                  <SelectExtendedField.Dropdown.List dropdownOpened={opened}>
                    {industries.map((option) => (
                      <SelectExtendedField.Dropdown.List.Item
                        key={option.id}
                        id={option.id}
                        selected={option.id === industry.id}
                        onSelect={() => {
                          setIndustry(option)
                          setOpened(false)
                        }}
                      >
                        {option.label}
                      </SelectExtendedField.Dropdown.List.Item>
                    ))}
                  </SelectExtendedField.Dropdown.List>
                </SelectExtendedField.Dropdown>
              )}
            </SelectExtendedField>
          </ExampleCard>
        </Section>

        <Section
          id='buttons'
          title='Кнопки'
          description='Сборник акцентных, вторичных и иконографических кнопок — готовые паттерны для действия пользователя.'
        >
          <ExampleCard title='Основные действия' description='Брендовые цвета и состояния загрузки по умолчанию.'>
            <div className='inline inline--wrap'>
              <Button
                theme={EButtonTheme.GENERAL}
                size={EComponentSize.MD}
                icon={<ArrowrightStrokeSrvIcon24 paletteIndex={0} />}
              >
                Продолжить
              </Button>
              <Button theme={EButtonTheme.DANGER} size={EComponentSize.MD}>
                Удалить
              </Button>
              <Button
                theme={EButtonTheme.GENERAL}
                size={EComponentSize.SM}
                loading
                icon={<SearchStrokeSrvIcon24 paletteIndex={0} />}
              >
                Поиск
              </Button>
            </div>
          </ExampleCard>
          <ExampleCard title='Вторичные сценарии' description='Для альтернативных или дополнительных действий.'>
            <div className='inline inline--wrap'>
              <Button theme={EButtonTheme.SECONDARY} size={EComponentSize.MD}>
                Настроить
              </Button>
              <Button theme={EButtonTheme.SECONDARY_LIGHT} size={EComponentSize.MD}>
                Фильтры
              </Button>
              <Button theme={EButtonTheme.LINK} size={EComponentSize.MD}>
                Подробнее
              </Button>
            </div>
          </ExampleCard>
          <ExampleCard title='Иконки и быстрые действия'>
            <div className='icon-actions'>
              <div className='icon-actions__item'>
                <ButtonIcon shape={EButtonIconShape.CIRCLE} aria-label='Добавить в избранное'>
                  <HeartStrokeSrvIcon24 paletteIndex={3} />
                </ButtonIcon>
                <Caption size={ECaptionSize.C2}>В избранное</Caption>
              </div>
              <div className='icon-actions__item'>
                <ButtonIcon aria-label='Расширенные настройки'>
                  <SettingsStrokeSrvIcon24 paletteIndex={3} />
                </ButtonIcon>
                <Caption size={ECaptionSize.C2}>Настройки</Caption>
              </div>
              <div className='icon-actions__item'>
                <Button
                  theme={EButtonTheme.SECONDARY}
                  size={EComponentSize.SM}
                  icon={<ArrowrightStrokeSrvIcon24 paletteIndex={3} />}
                >
                  Экспорт
                </Button>
                <Caption size={ECaptionSize.C2}>Экспорт отчёта</Caption>
              </div>
            </div>
          </ExampleCard>
        </Section>

        <Section
          id='forms'
          title='Формы и поля'
          description='Комбинации текстовых полей, масок ввода, переключателей и выбора тарифа в одном сценарии.'
        >
          <ExampleCard title='Карточка клиента' description='Текстовые поля, маски и переключатели в одном блоке.'>
            <form className='stack stack--form' onSubmit={handleProfileSubmit}>
              <div className='stack stack--tight'>
                <TextField
                  label='Контактное лицо'
                  inputProps={{
                    value: profileName,
                    placeholder: 'Введите имя и фамилию',
                    onChange: (event) => setProfileName(event.target.value),
                  }}
                />
                <MaskedField
                  label='Телефон'
                  maskedInputProps={{
                    value: phone,
                    onChange: (event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value),
                    mask: phoneMask,
                    placeholderMask: '+7 (___) ___-__-__',
                  }}
                />
              </div>
              <div className='stack stack--tight'>
                <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                  Тарифный план
                </Text>
                <SegmentedControl
                  className='form-segmented'
                  theme={ESegmentedControlTheme.GENERAL_1}
                  type={ESegmentedControlType.SINGLE}
                  size={ESegmentedControlSize.MD}
                  value={tariff}
                  onSelect={(value) => setTariff(value as TariffValue)}
                >
                  <SegmentedControl.Segment value='standard'>Стандарт</SegmentedControl.Segment>
                  <SegmentedControl.Segment value='advanced'>Бизнес</SegmentedControl.Segment>
                  <SegmentedControl.Segment value='premium'>Безлимит</SegmentedControl.Segment>
                </SegmentedControl>
              </div>
              <div className='inline inline--wrap'>
                <Checkbox checked={notifyEmail} onChange={(event) => setNotifyEmail(event.currentTarget.checked)}>
                  Уведомления на e-mail
                </Checkbox>
                <Checkbox checked={notifySms} onChange={(event) => setNotifySms(event.currentTarget.checked)}>
                  SMS-уведомления
                </Checkbox>
              </div>
              <div className='inline inline--wrap'>
                <Radio name='role' value='owner' checked={role === 'owner'} onChange={handleRoleChange}>
                  Владелец бизнеса
                </Radio>
                <Radio name='role' value='manager' checked={role === 'manager'} onChange={handleRoleChange}>
                  Менеджер
                </Radio>
              </div>
              <div className='form-actions'>
                <Button theme={EButtonTheme.GENERAL} size={EComponentSize.MD} type='submit'>
                  Сохранить
                </Button>
              </div>
              {formMessage ? (
                <Caption size={ECaptionSize.C1} type={EFontType.SUCCESS}>
                  {formMessage}
                </Caption>
              ) : null}
            </form>
          </ExampleCard>
        </Section>

        <Section
          id='data'
          title='Данные и списки'
          description='Карточки, списки и табличные представления — структурируем данные без лишней вёрстки.'
        >
          <ExampleCard title='Карточка предложения'>
            <CardStatic theme={ECardTheme.GENERAL}>
              <CardStatic.Media>
                <img className='card-media' src='https://placehold.co/640x200/21A19A/ffffff?text=SberBusiness' alt='Платёжное предложение' />
              </CardStatic.Media>
              <CardStatic.Content className='stack'>
                <Title size={ETitleSize.H3} tag='h3'>
                  Бизнес-карта «Всё включено»
                </Title>
                <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                  До 5% кешбэка на ключевые категории, бесплатное обслуживание и мгновенное пополнение из приложения.
                </Text>
                <Button
                  theme={EButtonTheme.SECONDARY_LIGHT}
                  size={EComponentSize.SM}
                  icon={<ArrowrightStrokeSrvIcon24 paletteIndex={3} />}
                >
                  Подробнее
                </Button>
              </CardStatic.Content>
            </CardStatic>
          </ExampleCard>
          <ExampleCard title='Список платежей' description='Готовые отступы, иконки и выделение статусов внутри List.'>
            <List className='list-demo'>
              {payments.map((payment) => (
                <ListItem key={payment.id} className='list-demo__item'>
                  <div className='list-demo__info'>
                    <Text size={ETextSize.B2}>{payment.title}</Text>
                    <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
                      {payment.subtitle}
                    </Caption>
                  </div>
                  <div className='list-demo__meta'>
                    <Caption size={ECaptionSize.C2} type={getStatusTone(payment.status)}>
                      {payment.status}
                    </Caption>
                    <Text size={ETextSize.B2} className='list-demo__amount'>
                      {payment.amount}
                    </Text>
                  </div>
                </ListItem>
              ))}
            </List>
          </ExampleCard>
          <ExampleCard title='Остров метрик' description='Компонент Island для компактного отображения аналитики.'>
            <Island type={EIslandType.TYPE_2} paddingSize={32} borderRadius={24}>
              <Island.Header>
                <Text size={ETextSize.B2} type={EFontType.BRAND}>
                  Пульс бизнеса
                </Text>
              </Island.Header>
              <Island.Body>
                <div className='island-stats'>
                  {insightTiles.map((tile) => (
                    <div key={tile.id} className='island-stats__item'>
                      <Caption size={ECaptionSize.C2} type={EFontType.SECONDARY}>
                        {tile.title}
                      </Caption>
                      <Text size={ETextSize.B1} type={tile.tone}>
                        {tile.value}
                      </Text>
                      <Caption size={ECaptionSize.C1} type={EFontType.TERTIARY}>
                        {tile.subtitle}
                      </Caption>
                    </div>
                  ))}
                </div>
              </Island.Body>
              <Island.Footer>
                <Button theme={EButtonTheme.SECONDARY_LIGHT} size={EComponentSize.SM}>
                  Открыть отчёт
                </Button>
              </Island.Footer>
            </Island>
          </ExampleCard>
        </Section>

        <Section
          id='feedback'
          title='Состояния и процессы'
          description='Отображаем прогресс, уведомления и навигацию по страницам с готовыми компонентами.'
        >
          <ExampleCard title='Системное уведомление'>
            <div className='stack'>
              {alertVisible ? (
                <AlertProcess type={EAlertType.INFO} closable onClose={() => setAlertVisible(false)}>
                  <Text size={ETextSize.B3}>Расписание синхронизировано.</Text>
                  <Gap size={8} />
                  <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                    Следующее обновление произойдёт в 18:00.
                  </Text>
                </AlertProcess>
              ) : (
                <Button theme={EButtonTheme.SECONDARY} size={EComponentSize.SM} onClick={() => setAlertVisible(true)}>
                  Показать уведомление
                </Button>
              )}
            </div>
          </ExampleCard>
          <ExampleCard title='Загрузка данных'>
            <div className='stack'>
              <div className='inline inline--center'>
                <LoaderSmall theme={ELoaderSmallTheme.BRAND} size={EComponentSize.SM} />
                <LoaderSmall theme={ELoaderSmallTheme.BRAND} size={EComponentSize.MD} />
                <LoaderSmall theme={ELoaderSmallTheme.NEUTRAL} size={EComponentSize.LG} />
              </div>
              <div className='stack stack--tight'>
                <Skeleton style={{ width: '60%', height: 12, borderRadius: 8 }} />
                <Skeleton style={{ width: '80%', height: 12, borderRadius: 8 }} />
                <Skeleton style={{ width: '48%', height: 12, borderRadius: 8 }} />
              </div>
            </div>
          </ExampleCard>
          <ExampleCard title='Overlay лоадер' description='LoaderMiddle накрывает контент и показывает прогресс операции.'>
            <div className='loader-widget-demo'>
              {isWidgetLoading && (
                <div className='loader-widget-demo__overlay'>
                  <LoaderMiddle />
                </div>
              )}
              <div className='stack'>
                <Text size={ETextSize.B2}>Импортируем данные из бухгалтерии</Text>
                <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
                  Поддерживает обработку ESC, автоматическое закрытие и слои затемнения.
                </Caption>
                <div className='loader-widget-demo__actions'>
                  <Button
                    theme={EButtonTheme.GENERAL}
                    size={EComponentSize.MD}
                    type='button'
                    disabled={isWidgetLoading}
                    onClick={handleSync}
                  >
                    Запустить синхронизацию
                  </Button>
                  {widgetMessage ? (
                    <Caption size={ECaptionSize.C1} type={EFontType.SUCCESS}>
                      {widgetMessage}
                    </Caption>
                  ) : (
                    <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
                      Нажмите, чтобы получить обновлённые данные.
                    </Caption>
                  )}
                </div>
              </div>
            </div>
          </ExampleCard>
          <ExampleCard title='Пагинация' description='Комбинация селектора и навигации по страницам.'>
            <div className='stack stack--tight'>
              <Pagination
                paginationSelectProps={{
                  paginationLabel: 'Записей на странице',
                  options: [10, 20, 50],
                  value: pageSize,
                  onChange: (value: number) => setPageSize(value),
                }}
                paginationNavigationProps={{
                  currentPage,
                  totalPages: 12,
                  onCurrentPageChange: (value: number) => setCurrentPage(value),
                }}
              />
              <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
                Страница {currentPage} из 12 • отображаем по {pageSize} записей.
              </Caption>
            </div>
          </ExampleCard>
        </Section>
      </div>
    </>
  )
}

