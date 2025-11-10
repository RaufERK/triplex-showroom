import { EFontType } from '@sberbusiness/triplex-next'
import { type InsightTile } from '../types'

export const insightTiles: InsightTile[] = [
  {
    id: 'revenue',
    title: 'Выручка',
    value: '₽ 2,4 млн',
    subtitle: 'за последние 30 дней',
    tone: EFontType.BRAND,
  },
  {
    id: 'conversion',
    title: 'Конверсия заявок',
    value: '+12%',
    subtitle: 'рост за неделю',
    tone: EFontType.SUCCESS,
  },
  {
    id: 'processing',
    title: 'Активных платежей',
    value: '48',
    subtitle: 'ожидают подтверждения',
    tone: EFontType.INFO,
  },
]

