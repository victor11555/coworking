import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import { css, cx } from '@linaria/core'

type Props = { className?: string, children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>

const styles = {
    wrapper: css`
    `,
}

const Button: FC<Props> = ({className, children}) => (
    <button className={cx(styles.wrapper, className)}>
        {children}
    </button>
)

export default Button
