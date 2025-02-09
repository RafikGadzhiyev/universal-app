import { InputHTMLAttributes, PropsWithChildren } from "react";
import { VariantProps } from "class-variance-authority";

import { inputVariants } from "./Input.variants.ts";
import {collectMergeableClasses, mergeClasses} from "../../../utils/style.util.ts";

import './Input.style.css'

interface IInputProps extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string,
  dense?: boolean,
}

function Input(props: IInputProps){
  const {
    label,
    palette,
    variant,
    className,
    dense,
    ...tagProps
  } = props;

  const classesFromVariants = inputVariants(
    {
      palette,
      variant,
    }
  )

  const classesToMerge = collectMergeableClasses(
    [
      classesFromVariants,
      className,
      dense ? 'cp-input__dense' : 'cp-input__sparse',
    ]
  )

  const mergedClasses = mergeClasses(classesToMerge)

  return (
    <div className='flex flex-col'>
      <label className="text-black text-xs">
        { label }
      </label>

      <input
        type="text"
        {...tagProps}
        className={mergedClasses}
      />
    </div>
  )
}

export default Input;
