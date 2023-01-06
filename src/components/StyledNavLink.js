import React from 'react'
import { StyledBaseNavLinkText } from './style/style'

export const StyledNavLink = React.forwardRef(({ ...props }, ref) => {
    let activeStyle = {
        backgroundColor: 'var(--main-red)',
        color: 'white',
    }
    return (
        <StyledBaseNavLinkText
            ref={ref}
            {...props}
            style={({ isActive }) => ({
                ...props.style,
                ...(isActive ? activeStyle : null),
            })}
            sx={{ padding: props.padding, borderRadius: props.borderradius }}
        />
    )
})
