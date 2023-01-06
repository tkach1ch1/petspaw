import { Box } from '@mui/system'
import React from 'react'
import { BoxWrapper, SubTypography, UploadButton } from '../../style/style'

export const ModalUploadFileInfo = (props) => {
    return (
        <Box
            mt={{
                xs: '200px',
                sm: '270px',
                md: '340px',
                lg: '230px',
                xl: '240px',
                xxl: '340px',
            }}
        >
            {props.file === null ? (
                <SubTypography sx={{ fontSize: '20px' }}>No file selected</SubTypography>
            ) : (
                <BoxWrapper>
                    <SubTypography
                        sx={{
                            fontSize: {
                                xs: '16px',
                                md: '20px',
                                lg: '16px',
                                xxl: '20px',
                            },
                        }}
                    >
                        Image File Name: {props.file && props.file.name}
                    </SubTypography>
                    {props.imageStatus !== 'loading' && (
                        <UploadButton
                            sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                            onClick={props.onClick}
                        >
                            Upload photo
                        </UploadButton>
                    )}
                </BoxWrapper>
            )}
        </Box>
    )
}
