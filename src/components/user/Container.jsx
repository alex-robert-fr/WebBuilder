import { useNode } from '@craftjs/core'
import { Paper } from '@material-ui/core'
import React from 'react'

export default function Container({background, padding = 0, children}) {
    const { connectors: {connect, drag} } = useNode()
    return (
        <Paper style={{margin: "5px 0", background, padding: `${padding}px`}} ref={ref=> connect(drag(ref))} style={{ background, padding: `${padding}px`}}>
            {children}
        </Paper>
    )
}
