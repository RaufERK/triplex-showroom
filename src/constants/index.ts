export * from './industries'
export * from './insights'
export * from './payments'
export * from './navigation'

export const phoneMask: (string | RegExp)[] = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]

export const tariffLabels = {
  standard: 'Стандарт',
  advanced: 'Бизнес',
  premium: 'Безлимит',
} as const

