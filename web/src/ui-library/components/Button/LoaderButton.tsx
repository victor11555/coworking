import React from 'react'
import Button from './Button'
import { css, cx } from '@linaria/core'
import Spinner from '../Spinner'

type Props = {
    className?: string
}

const styles = {
    button: css`
      background-color: var(--color-button-loader-bg);
      border: 0.063rem solid var(--color-button-loader-border);
      color: var(--color-button-loader-text);
    `,
    spinner: css`
      width: 1rem;
      height: 1rem;
    `,
}

const LoaderButton: React.FC<Props> = ({ className, ...props }) => (
    <Button className={cx(styles.button, className)} {...props}>
        <Spinner className={styles.spinner}/>
    </Button>
)

export default LoaderButton
