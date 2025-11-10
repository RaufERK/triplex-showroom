import { Text, Caption, ETextSize, ECaptionSize, EFontType } from '@sberbusiness/triplex-next'
import styles from './ColorPalette.module.css'

type ColorPaletteProps = {
  name: string
  description: string
  prefix: string
  shades: readonly number[]
  primary: number
}

export const ColorPalette = ({ name, description, prefix, shades, primary }: ColorPaletteProps) => {
  const getCSSVariable = (shade: number) => `${prefix}-${shade}-1-1-1`

  return (
    <div className={styles.palette}>
      <div className={styles.header}>
        <Text size={ETextSize.B2} type={EFontType.PRIMARY}>
          {name}
        </Text>
        <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
          {description}
        </Caption>
      </div>
      <div className={styles.shades}>
        {shades.map((shade) => {
          const cssVar = getCSSVariable(shade)
          const isPrimary = shade === primary

          return (
            <div
              key={shade}
              className={`${styles.shade} ${isPrimary ? styles.shadePrimary : ''}`}
              style={{ backgroundColor: `var(${cssVar})` }}
              title={cssVar}
            >
              <div className={styles.shadeInfo}>
                <Caption size={ECaptionSize.C2} className={styles.shadeLabel}>
                  {shade}
                </Caption>
                {isPrimary && (
                  <Caption size={ECaptionSize.C2} className={styles.primaryBadge}>
                    ⭐
                  </Caption>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Caption size={ECaptionSize.C1} type={EFontType.TERTIARY} className={styles.variable}>
        var({getCSSVariable(primary)})
      </Caption>
    </div>
  )
}

