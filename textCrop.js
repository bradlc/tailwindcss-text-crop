module.exports = function textCrop({ addUtilities, e, theme, variants }) {
  let config = theme('textCrop', {})
  let newUtilities = Object.keys(config).map(key => {
    let {
      lineHeight,
      topCrop,
      bottomCrop,
      cropFontSize,
      cropLineHeight
    } = config[key]

    let dynamicTopCrop =
      Math.max(
        topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
        0
      ) / cropFontSize

    let dynamicBottomCrop =
      Math.max(
        bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
        0
      ) / cropFontSize

    let className = e(`text-crop-${key}`)

    let baseStyles = {
      content: '""',
      display: 'block',
      width: 0,
      height: 0
    }

    return {
      [`.${className}`]: {
        lineHeight,
        paddingTop: '1px',
        paddingBottom: '1px'
      },
      [`.${className}::before`]: {
        ...baseStyles,
        marginBottom: `calc(${(-dynamicTopCrop).toFixed(5)}em - 1px)`
      },
      [`.${className}::after`]: {
        ...baseStyles,
        marginTop: `calc(${(-dynamicBottomCrop).toFixed(5)}em - 1px)`
      }
    }
  })

  addUtilities(newUtilities, variants('textCrop'))
}
