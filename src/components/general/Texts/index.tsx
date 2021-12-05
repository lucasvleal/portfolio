import React, { HTMLAttributes, ReactNode } from 'react';

import { Regular, Vidaloka, Montserrat, } from './styles';

interface Props extends HTMLAttributes<HTMLSpanElement> { 
    size?: number;
    weight?: number | string;
    color?: string;
    children: ReactNode;
}

export function RegularText({ children, size, weight, color }: Props) {
  return (
    <Regular customSize={size} customWeight={weight} customColor={color}>{children}</Regular>
  )
}

export function VidalokaText({ children, size, weight, color }: Props) {
    return (
      <Vidaloka customSize={size} customWeight={weight} customColor={color}>{children}</Vidaloka>
    )
}

export function MontserratText({ children, size, weight, color }: Props) {
    return (
      <Montserrat customSize={size} customWeight={weight} customColor={color}>{children}</Montserrat>
    )
}
