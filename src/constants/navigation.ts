import { type SectionLink } from '../types'

export const sectionLinks: readonly SectionLink[] = [
  { id: 'typography', title: 'Типографика' },
  { id: 'buttons', title: 'Кнопки' },
  { id: 'forms', title: 'Формы и поля' },
  { id: 'data', title: 'Данные и списки' },
  { id: 'feedback', title: 'Состояния и процессы' },
] as const

