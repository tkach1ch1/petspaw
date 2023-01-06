import React from 'react'
import { StyledButton } from './style/style'

export const MainStyledButton = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledButton
            sx={{ padding: props.padding }}
            ref={ref}
            onClick={props.onClick}
        >
            {children}
        </StyledButton>
    )
})
