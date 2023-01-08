import { ReactNode } from 'react'
import { PageWrapperBox } from './style/style'

interface PageWrapperProps {
    children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return <PageWrapperBox>{children}</PageWrapperBox>
}
