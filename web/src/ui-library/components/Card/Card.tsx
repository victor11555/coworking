import React, { FC, ReactNode } from 'react'
import { css, cx } from '@linaria/core'

type Props = {
    children: ReactNode
    className?: string
    isLoading?: boolean
}

const style = {
    wrapper: css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 32rem;
      height: 44.75rem;
      border: 0.063rem solid var(--color-card-border);
      border-radius: var(--border-radius);
      box-shadow: 0.25rem 0.375rem 0.25rem var(--color-card-box-shadow);
    `,
}

const Card: FC<Props> = ({ className, children, ...otherProps}) => (
    <div className={cx(style.wrapper, className)} {...otherProps}>
        {children}
    </div>
)

export default Card
