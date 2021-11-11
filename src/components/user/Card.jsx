import React from 'react'
import Button from './Button'
import Container from './Container'
import Text from './Text'

export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </div>
            <div className="buttons-only">
                <Button size="small" variant="contained" color="primary">Learn more</Button>
            </div>
        </Container>
    )
}
