import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { styled } from '@linaria/react'

import lightTheme from './light'
import darkTheme from './dark'

type Props = {
    children: ReactNode
    theme?: string
}

const themes: { [key: string]: string } = {
    light: lightTheme,
    dark: darkTheme
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default ({ children, theme = 'light' }: Props): ReactElement => (
    <ThemeProvider theme={createTheme()}>
        <Container className={themes[theme]}>
            {children}
        </Container>
    </ThemeProvider>
)
