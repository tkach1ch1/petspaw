import React from 'react'
import { StyledMainBox } from './style/style'

export const MainBox = ({ children, ...props }) => {
    return <StyledMainBox {...props}>{children}</StyledMainBox>
}
