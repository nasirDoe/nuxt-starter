// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [],
  shortcuts: {},
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['300', '400', '500', '600', '700'],
        },
      },
    }),
  ],
  theme: {
    colors: {},
  },
})
