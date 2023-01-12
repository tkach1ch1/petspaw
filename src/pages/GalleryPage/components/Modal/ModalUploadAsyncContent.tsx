import { Box } from '@mui/system'
import success from 'src/img/svg/success-20.svg'
import error from 'src/img/svg/error-20.svg'
import { Typography } from '@mui/material'
import { StyledCircularProgress } from 'src/components/style/style'
import { useAppSelector } from 'src/hooks/reduxHooks'
import { InfoUploadBox } from '../../style/style'

interface ModalUploadAsyncContentProps {
    isUploaded: boolean
}

export const ModalUploadAsyncContent = ({ isUploaded }: ModalUploadAsyncContentProps) => {
    const imageStatus = useAppSelector((state) => state.allImages.statusUpload)

    let content

    if (imageStatus === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    top: {
                        xs: '450px',
                        sm: '500px',
                        md: '550px',
                        lg: '500px',
                        xxl: '550px',
                        xxxl: '550px',
                    },
                }}
                size={'50px'}
                color='secondary'
            />
        )
    } else if (imageStatus === 'succeeded' && isUploaded) {
        content = (
            <InfoUploadBox>
                <img
                    src={success}
                    alt='success'
                />
                <Typography>Thanks for the Upload - Cat found!</Typography>
            </InfoUploadBox>
        )
    } else if (imageStatus === 'failed') {
        content = (
            <InfoUploadBox>
                <img
                    src={error}
                    alt='success'
                />
                <Typography>No Cat found - Try a different one</Typography>
            </InfoUploadBox>
        )
    }
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '100px' }}
        >
            {content}
        </Box>
    )
}
