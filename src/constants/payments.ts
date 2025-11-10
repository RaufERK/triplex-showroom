import { type PaymentItem } from '../types'

export const payments: PaymentItem[] = [
  {
    id: 'payment-1',
    title: 'Платёж №24901',
    subtitle: 'ООО «Вектор», назначение: аренда',
    status: 'В процессе',
    amount: '247 310 ₽',
  },
  {
    id: 'payment-2',
    title: 'Платёж №24902',
    subtitle: 'ИП Иванов, назначение: услуги',
    status: 'Оплачен',
    amount: '58 900 ₽',
  },
  {
    id: 'payment-3',
    title: 'Платёж №24903',
    subtitle: 'ООО «Сигма», назначение: поставка',
    status: 'Ожидает',
    amount: '129 000 ₽',
  },
]

