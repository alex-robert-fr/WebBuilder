import { useNode } from '@craftjs/core'
import { Typography } from '@material-ui/core'
import React from 'react'

export default Text = ({text, fontSize}) => {
    const { connectors: {connect, drag} } = useNode()
    return (
        <div
            ref={ref => connect(drag(ref))}
        >
            <Typography style={{fontSize}}>{text}</Typography>
        </div>
    )
}

Text.craft = {
  rules: {
    canDrag: (node) => node.data.props.text != "Drag"
  }
}