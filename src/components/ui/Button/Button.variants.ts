import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'cp-button px-6 py-2',
  {
    variants: {
      variant: {
        solid: 'cp-button__solid',
        outlined: 'cp-button__outlined'
      },
      palette: {
        primary: "cp-button__primary",
        secondary: "cp-button__secondary",
        accent: "cp-button__accent",
        positive: "cp-button__positive",
        negative: "cp-button__negative",
        warning: "cp-button__warning",
        info: "cp-button__info",
      }
    },

    defaultVariants: {
      variant: "solid",
      palette: "primary"
    }
  },
)
