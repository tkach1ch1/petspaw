import { CSSProperties, ReactNode } from 'react'
import { StyledMainBox } from './style/style'

interface MainBoxProps {
    children: ReactNode
    sx?: CSSProperties
}

export const MainBox = ({ children, sx }: MainBoxProps) => {
    return <StyledMainBox sx={sx}>{children}</StyledMainBox>
}
