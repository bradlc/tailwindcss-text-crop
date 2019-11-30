# tailwindcss-text-crop

```js
module.exports = {
  theme: {
    textCrop: {
      h1: {
        lineHeight: 1,
        // http://text-crop.eightshapes.com/
        topCrop: 8,
        bottomCrop: 10,
        cropFontSize: 36,
        cropLineHeight: 1.2
      }
    }
  },
  plugins: [
    require('tailwindcss-text-crop')
  ]
}
```
