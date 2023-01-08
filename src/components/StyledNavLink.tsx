import React, { CSSProperties, ReactNode } from 'react'
import { StyledBaseNavLinkText } from './style/style'

export interface StyledNavLinkProps {
    children: ReactNode
    style?: CSSProperties
    sx?: CSSProperties
    to: string
}

export type Ref = HTMLAnchorElement

export const StyledNavLink = React.forwardRef<Ref, StyledNavLinkProps>(
    ({ style, sx, to, children }, ref) => {
        let activeStyle = {
            backgroundColor: 'var(--main-red)',
            color: 'white',
        }
        return (
            <StyledBaseNavLinkText
                ref={ref}
                to={to}
                style={({ isActive }) => ({
                    ...style,
                    ...(isActive ? activeStyle : null),
                })}
                sx={sx}
            >
                {children}
            </StyledBaseNavLinkText>
        )
    }
)
