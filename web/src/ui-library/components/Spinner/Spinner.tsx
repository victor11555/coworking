import React from 'react'
import { cx, css } from '@linaria/core'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = {
    className?: string
}

const styles = {
    wrapper: css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    spinner: css`
        div& {
          color: var(--color-spinner-fg);
          position: absolute;
          left: 0;
        }
    `,
}

const Spinner: React.FC<Props> = ({ className, ...props }) => (
    <div className={cx(styles.wrapper, className)}>
        <CircularProgress
            variant="indeterminate"
            className={styles.spinner}
            {...props}
        />
    </div>
)

export default Spinner
