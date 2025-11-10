import { Title, Text, ETitleSize, ETextSize, EFontType } from '@sberbusiness/triplex-next'
import { type SectionProps } from '../../types'
import styles from './Section.module.css'

export const Section = ({ id, title, description, children }: SectionProps) => (
  <section id={id} className={styles.section}>
    <div className={styles.header}>
      <Title size={ETitleSize.H3} tag='h2'>
        {title}
      </Title>
      <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
        {description}
      </Text>
    </div>
    <div className={styles.examples}>{children}</div>
  </section>
)

