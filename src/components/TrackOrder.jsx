import React from 'react'
import { Input, InputGroup, Button, Container} from 'reactstrap'

export default function TrackOrder() {
    return (
        <Container className='mb-2'>
            <InputGroup >
            <Input style={{maxWidth:'500px'}}>
            </Input>
            <Button>Track Order</Button>
            </InputGroup>
        </Container>
    )
}
