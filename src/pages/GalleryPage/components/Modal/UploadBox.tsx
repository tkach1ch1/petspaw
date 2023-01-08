import { ReactNode } from 'react'
import 'src/styles/styles.css'
import { Box } from '@mui/material'
import { StyledUpdateBox, StyledUploadBoxFail } from '../../style/style'
import { useAppSelector } from 'src/hooks/reduxHooks'

interface UploadBoxProps {
    children: ReactNode
}

export const UploadBox = ({ children }: UploadBoxProps) => {
    const imageStatus = useAppSelector((state) => state.allImages.statusUpload)

    return (
        <Box mt={'-10px'}>
            {imageStatus === 'failed' ? (
                <StyledUploadBoxFail>{children}</StyledUploadBoxFail>
            ) : (
                <StyledUpdateBox>{children}</StyledUpdateBox>
            )}
        </Box>
    )
}
