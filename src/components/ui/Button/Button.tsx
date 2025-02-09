import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import { VariantProps } from 'class-variance-authority'
import { IconName } from "lucide-react/dynamic";

import {
  collectMergeableClasses,
  mergeClasses,
} from './../../../utils/style.util.ts'

import { buttonVariants } from "./Button.variants.ts";
import Icon from "../Icon/Icon.tsx";

import './Button.style.css'

interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
  icon?: IconName
  label: string
}

function Button(props: IButtonProps) {
  const {
    label,
    palette,
    variant,
    icon,
    className,
    ...tagProps
  } = props

  const classesFromVariants = buttonVariants(
    {
      palette,
      variant,
    }
  )

  const classesToMerge = collectMergeableClasses(
    [
      classesFromVariants,
      className
    ]
  )

  const mergedClasses = mergeClasses(classesToMerge)

  return (
    <button
      type="button"
      {...tagProps}
      className={mergedClasses}
    >
      <div className='flex items-center justify-center gap-2'>
        {
          !!icon
          && <Icon name={icon}/>
        }

        <span>
          { label }
        </span>
      </div>
    </button>
  )
}

export default Button
