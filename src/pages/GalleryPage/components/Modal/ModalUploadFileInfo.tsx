import { Box } from '@mui/system'
import { BoxWrapper, SubTypography, UploadButton } from '../../style/style'
import { FileElements } from './ModalUpload'

interface ModalUploadFileInfoProps {
    imageStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
    onClick: () => void
    file: FileElements[]
}

export const ModalUploadFileInfo = ({ onClick, imageStatus, file }: ModalUploadFileInfoProps) => {
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
            {!file ? (
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
                        Image File Name: {file && file[0].name}
                    </SubTypography>
                    {imageStatus !== 'loading' && (
                        <UploadButton
                            sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                            onClick={onClick}
                        >
                            Upload photo
                        </UploadButton>
                    )}
                </BoxWrapper>
            )}
        </Box>
    )
}
