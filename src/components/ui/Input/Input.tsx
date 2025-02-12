// TODO: during migration to React 19 => Do we need react hook form ?

import { forwardRef, ForwardedRef, InputHTMLAttributes, PropsWithChildren} from "react";
import { VariantProps } from "class-variance-authority";

import { inputVariants } from "./Input.variants.ts";
import {collectMergeableClasses, mergeClasses} from "../../../utils/style.util.ts";

import './Input.style.css'

interface IInputProps extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string,
  dense?: boolean,
  error?: string,
  hint?: string
}

const Input = forwardRef(
  function Input(props: IInputProps, ref: ForwardedRef<HTMLInputElement>){
    const {
      label,
      palette,
      variant,
      className,
      dense,
      error,
      hint,
      ...tagProps
    } = props;

    const classesFromVariants = inputVariants(
      {
        palette: error ? 'negative' : palette,
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
          ref={ref}
          type="text"
          {...tagProps}
          className={mergedClasses}
        />

        {
          !!error &&
          <span className='text-negative-500 text-xs'>
            { error }
          </span>
        }

        {
          !error &&
          !!hint &&
          <span className='text-gray-400 text-xs'>
            { hint }
          </span>
        }
      </div>
    )
  }
)

export default Input;
