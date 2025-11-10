import { EFontType } from '@sberbusiness/triplex-next'
import { type PaymentStatus } from '../types'

export const getStatusTone = (status: PaymentStatus): EFontType => {
  switch (status) {
    case 'Оплачен':
      return EFontType.SUCCESS
    case 'В процессе':
      return EFontType.BRAND
    case 'Ожидает':
    default:
      return EFontType.WARNING
  }
}

