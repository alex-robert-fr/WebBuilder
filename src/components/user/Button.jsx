import React from 'react'
import { Button as MaterialButton } from '@material-ui/core'
import { useNode } from '@craftjs/core'

export default function Button({variant, color, children}) {
    const { connectors: {connect, drag} } = useNode()
    
    return (
        <MaterialButton ref={ref => connect(drag(ref))} variant={variant} color={color}>
            {children}
        </MaterialButton>
    )
}
