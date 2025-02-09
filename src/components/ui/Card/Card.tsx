import { HTMLAttributes, PropsWithChildren } from "react";

import {collectMergeableClasses, mergeClasses} from "../../../utils/style.util.ts";

import './Card.style.css'

// TODO: Add Card header support?
// TODO: Add Card footer support?


interface ICardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  dense?: boolean
}

function Card(props: ICardProps) {
  const {
    dense,
    className,
    children,
    ...tagProps
  } = props;

  const classesToMerge = collectMergeableClasses(
    [
      className,
      'cp-card',
      dense ? 'cp-card__dense' : 'cp-card__sparse'
    ]
  )

  const mergedClasses = mergeClasses(classesToMerge)

  return <div
    {...tagProps}
    className={mergedClasses}
  >
    {children}
  </div>
}

export default Card;
