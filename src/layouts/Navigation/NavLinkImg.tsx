import React from 'react'
import { StyledNavLinkProps } from 'src/components/StyledNavLink'
import { StyledBaseNavLinkImg } from './style/style'

interface NavLinkImgProps extends StyledNavLinkProps {
    backgroundColor: string
    border: string
}

export type Ref = HTMLAnchorElement

export const NavLinkImg = React.forwardRef<Ref, NavLinkImgProps>(
    ({ style, to, children, backgroundColor, border }, ref) => {
        let activeStyle = {
            border: '4px solid #FBE0DC',
        }
        return (
            <StyledBaseNavLinkImg
                ref={ref}
                to={to}
                style={({ isActive }) => ({
                    ...style,
                    ...(isActive ? activeStyle : null),
                })}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    backgroundColor: backgroundColor,
                    border: border,
                }}
            >
                {children}
            </StyledBaseNavLinkImg>
        )
    }
)
