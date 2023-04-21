import React from 'react'
import { IconProps } from '.'
import clsx from 'clsx'

export default function Delete({ className, transform }: IconProps) {
  return (
    <svg className={clsx(className, 'w-6', 'w-6')}
    transform={transform} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.625 2.875H5.5C5.56875 2.875 5.625 2.81875 5.625 2.75V2.875H10.375V2.75C10.375 2.81875 10.4312 2.875 10.5 2.875H10.375V4H11.5V2.75C11.5 2.19844 11.0516 1.75 10.5 1.75H5.5C4.94844 1.75 4.5 2.19844 4.5 2.75V4H5.625V2.875ZM13.5 4H2.5C2.22344 4 2 4.22344 2 4.5V5C2 5.06875 2.05625 5.125 2.125 5.125H3.06875L3.45469 13.2969C3.47969 13.8297 3.92031 14.25 4.45312 14.25H11.5469C12.0813 14.25 12.5203 13.8313 12.5453 13.2969L12.9312 5.125H13.875C13.9438 5.125 14 5.06875 14 5V4.5C14 4.22344 13.7766 4 13.5 4ZM11.4266 13.125H4.57344L4.19531 5.125H11.8047L11.4266 13.125Z" fill="currentColor" />
    </svg>
  )
}
