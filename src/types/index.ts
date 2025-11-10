import { type ReactNode } from 'react'
import { type EFontType } from '@sberbusiness/triplex-next'

export type TariffValue = 'standard' | 'advanced' | 'premium'

export type RoleValue = 'owner' | 'manager'

export type PaymentStatus = 'В процессе' | 'Оплачен' | 'Ожидает'

export type PaymentItem = {
  id: string
  title: string
  subtitle: string
  status: PaymentStatus
  amount: string
}

export type Industry = {
  id: string
  label: string
}

export type InsightTile = {
  id: string
  title: string
  value: string
  subtitle: string
  tone: EFontType
}

export type SectionLink = {
  id: string
  title: string
}

export type SectionProps = {
  id: string
  title: string
  description: string
  children: ReactNode
}

export type ExampleCardProps = {
  title: string
  description?: string
  children: ReactNode
}

