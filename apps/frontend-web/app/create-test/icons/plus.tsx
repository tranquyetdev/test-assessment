import React from 'react'
import { IconProps } from '.'
import clsx from 'clsx'

export default function Plus({ className, transform }: IconProps) {
  return (
    <svg className={clsx(className, 'w-6', 'w-6')}
      transform={transform} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="currentColor" />
      <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="currentColor" />
    </svg>
  )
}
