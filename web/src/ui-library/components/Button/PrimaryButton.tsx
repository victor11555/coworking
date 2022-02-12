import React, { ButtonHTMLAttributes, FC, ReactNode, ReactElement } from 'react'
import { css, cx } from '@linaria/core'
import Button from './Button'
import { LoaderButton } from '.'

type Props = {
    isLoading?: boolean
    className?: string
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const style = css`
  background-color: var(--color-primary-button-bg);
  border: 0.063rem solid var(--color-primary-button-border);
  color: var(--color-primary-button-text);

  &:hover {
    background-color: var(--color-primary-button-bg-hover);
    border: 0.063rem solid var(--color-primary-button-border-hover);
    color: var(--color-primary-button-text-hover);
  }
`

const PrimaryButton: FC<Props> = ({ className, isLoading, ...props }) =>
    isLoading ? (<LoaderButton className={className} />) : (<Button className={cx(style, className)} {...props} />)
export default PrimaryButton
