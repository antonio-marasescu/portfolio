import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppThemePreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{amber.50}',
          100: '{amber.100}',
          200: '{amber.200}',
          300: '{amber.300}',
          400: '{amber.400}',
          500: '{amber.500}',
          600: '{amber.600}',
          700: '{amber.700}',
          800: '{amber.800}',
          900: '{amber.900}',
          950: '{amber.950}'
        },
        secondary: {
          50: '{yellow.50}',
          100: '{yellow.100}',
          200: '{yellow.200}',
          300: '{yellow.300}',
          400: '{yellow.400}',
          500: '{yellow.500}',
          600: '{yellow.600}',
          700: '{yellow.700}',
          800: '{yellow.800}',
          900: '{yellow.900}',
          950: '{yellow.950}'
        }
      },
      dark: {
        primary: {
          50: '{amber.50}',
          100: '{amber.100}',
          200: '{amber.200}',
          300: '{amber.300}',
          400: '{amber.400}',
          500: '{amber.500}',
          600: '{amber.600}',
          700: '{amber.700}',
          800: '{amber.800}',
          900: '{amber.900}',
          950: '{amber.950}'
        },
        secondary: {
          50: '{yellow.50}',
          100: '{yellow.100}',
          200: '{yellow.200}',
          300: '{yellow.300}',
          400: '{yellow.400}',
          500: '{yellow.500}',
          600: '{yellow.600}',
          700: '{yellow.700}',
          800: '{yellow.800}',
          900: '{yellow.900}',
          950: '{yellow.950}'
        },
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      }
    }
  },
  components: {
    menubar: {
      baseItem: {
        borderRadius: '16px'
      }
    },
    button: {
      root: {
        borderRadius: '16px'
      }
    }
  }
});

export const DarkModeSelector = 'portfolio-dark';
