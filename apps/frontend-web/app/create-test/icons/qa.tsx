import React from 'react'
import { IconProps } from '.'
import clsx from 'clsx'

export default function QA({ className, transform }: IconProps) {
  return (
    <svg className={clsx(className, 'w-6', 'w-6')}
      transform={transform} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 2.33325C4.87037 2.33325 2.33331 4.87031 2.33331 7.99992C2.33331 11.1295 4.87037 13.6666 7.99998 13.6666C11.1296 13.6666 13.6666 11.1295 13.6666 7.99992C13.6666 4.87031 11.1296 2.33325 7.99998 2.33325ZM1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325C11.6819 1.33325 14.6666 4.31802 14.6666 7.99992C14.6666 11.6818 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992ZM7.99998 12.303C8.36817 12.303 8.66665 12.0045 8.66665 11.6363C8.66665 11.2681 8.36817 10.9696 7.99998 10.9696C7.63179 10.9696 7.33331 11.2681 7.33331 11.6363C7.33331 12.0045 7.63179 12.303 7.99998 12.303ZM6.90088 5.16044C7.42811 4.92744 8.03092 4.82746 8.54469 4.87569C9.0707 4.92506 9.40749 5.11577 9.55646 5.35685C9.89737 5.90854 9.7355 6.64289 8.91372 7.33921C8.01366 8.10186 7.49998 8.65557 7.49998 9.51522C7.49998 9.79137 7.72384 10.0152 7.99998 10.0152C8.27613 10.0152 8.49998 9.79137 8.49998 9.51522C8.49998 9.16275 8.64206 8.88011 9.56019 8.10215C10.5566 7.25786 11.1268 5.99585 10.4071 4.83118C10.0258 4.21407 9.32109 3.94417 8.63815 3.88006C7.94299 3.81481 7.16943 3.94846 6.49667 4.24577C6.24409 4.35739 6.12982 4.65263 6.24144 4.90521C6.35306 5.15779 6.6483 5.27206 6.90088 5.16044Z" fill="currentColor" />
    </svg>
  )
}
