import React from 'react'
import { StyledBaseNavLinkImg } from './style/style'

export const NavLinkImg = React.forwardRef(({ ...props }, ref) => {
    let activeStyle = {
        border: '4px solid #FBE0DC',
    }
    return (
        <StyledBaseNavLinkImg
            ref={ref}
            {...props}
            style={({ isActive }) => ({
                ...props.style,
                ...(isActive ? activeStyle : null),
            })}
            sx={{
                display: { xs: 'none', sm: 'block' },
                backgroundColor: props.backgroundcolor,
                border: props.border,
            }}
        />
    )
})
