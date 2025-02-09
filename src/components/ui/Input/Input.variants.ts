import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'cp-input',
  {
    variants: {
      variant: {
        filled: 'cp-input__filled',
        outlined: 'cp-input__outlined'
      },
      palette: {
        primary: "cp-input__primary",
        secondary: "cp-input__secondary",
        accent: "cp-input__accent",
        positive: "cp-input__positive",
        negative: "cp-input__negative",
        warning: "cp-input__warning",
        info: "cp-input__info",
      }
    },

    defaultVariants: {
      variant: 'outlined',
      palette: "primary"
    }
  },
)
