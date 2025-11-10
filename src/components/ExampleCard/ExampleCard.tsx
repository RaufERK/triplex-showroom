import { Text, Caption, ETextSize, EFontType, ECaptionSize } from '@sberbusiness/triplex-next'
import { type ExampleCardProps } from '../../types'
import styles from './ExampleCard.module.css'

export const ExampleCard = ({ title, description, children }: ExampleCardProps) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
        {title}
      </Text>
      {description ? (
        <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
          {description}
        </Caption>
      ) : null}
    </div>
    <div className={styles.body}>{children}</div>
  </div>
)

