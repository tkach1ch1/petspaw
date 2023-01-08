import React, { ReactNode } from 'react'
import { StyledButton } from './style/style'

interface MainStyledButtonProps {
    children: ReactNode
    onClick: () => void
    padding: string
}

export const MainStyledButton = React.forwardRef(
    ({ children, onClick, padding }: MainStyledButtonProps, ref) => {
        return (
            <StyledButton
                sx={{ padding: padding }}
                ref={ref}
                onClick={onClick}
            >
                {children}
            </StyledButton>
        )
    }
)
