import React from 'react'
import '../../../../styles/styles.css'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { StyledUpdateBox, StyledUploadBoxFail } from '../../style/style'

export const UploadBox = ({ children }) => {
    const imageStatus = useSelector((state) => state.allImages.statusUpload)

    return (
        <Box mt={'-10px'}>
            {imageStatus === 'failed' ? (
                <StyledUploadBoxFail
                    variant='raised'
                    component='div'
                >
                    {children}
                </StyledUploadBoxFail>
            ) : (
                <StyledUpdateBox
                    variant='raised'
                    component='div'
                >
                    {children}
                </StyledUpdateBox>
            )}
        </Box>
    )
}
