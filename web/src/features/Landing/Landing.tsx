import React, { ReactElement } from 'react'
import { Wrapper, style } from './styles'
import Button, {PrimaryButton, SecondaryButton, LoaderButton} from '../../ui-library/components/Button'

const Landing = (): ReactElement => {
    return (
        <Wrapper>
            <Button>first button</Button>
            <PrimaryButton>primary</PrimaryButton>
            <SecondaryButton>secondary</SecondaryButton>
            <LoaderButton />
        </Wrapper>
    )
}

export default Landing
