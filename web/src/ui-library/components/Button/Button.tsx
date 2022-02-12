import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import { css, cx } from '@linaria/core'

type Props = {
    children: ReactNode
    className?: string
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const style = {
    wrapper: css`
      border-radius: var(--border-radius);
      font-weight: var(--text-weight-normal);
      font-size: var(--text-size-lg);
      line-height: var(--text-size-xl);
      text-align: center;
      cursor: pointer;
      width: 29rem;
      height: 5.125rem;

      &:disabled,
      &:disabled:hover {
        background-color: var(--color-button-disabled-bg);
        border: none;
        color: var(--color-button-disabled-text);
        cursor: default;
      }
    `,
}

const Button: FC<Props> = ({ className, children, ...otherProps}) => (
    <button className={cx(style.wrapper, className)} {...otherProps}>
        {children}
    </button>
)

export default Button
