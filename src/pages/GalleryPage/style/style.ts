import { Box, Button, IconButton, InputLabel, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { StyledPageName } from 'src/components/style/style'
import 'src/styles/styles.css'
import { theme } from 'src/styles/theme'

export const StyledBox = styled(Box)({
    backgroundColor: 'var(--main-gray)',
    borderRadius: '20px',
    width: '100%',
    padding: '10px 10px',
    marginBottom: '10px',
})

export const StyledInputLabel = styled(InputLabel)({
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: '500',
    color: 'var(--gray)',
    padding: '3px 13px',
})

export const StyledGrid = styled(Box)({
    position: 'relative',
    gridGap: '20px',
    gridAutoRows: '150px',
    gridAutoFlow: 'dense',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'center',
})

export const RefreshLineBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
    },
})

export const StyledUpdateBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'var(--main-red)',
        transition: 'all 0.4s',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
})

// -- Modal -- //

export const StyledModalBox = styled(Box)({
    outline: 'none',
    border: 'none',
    padding: '20px',
    position: 'absolute',
    backgroundColor: 'var(--main-gray)',
    overflow: 'hidden',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
        width: 0,
    },
})

export const CloseButton = styled(IconButton)({
    position: 'absolute',
    right: '30px',
    padding: '10px',
    width: '60px',
    backgroundColor: 'white',
    borderRadius: '20px',
    marginBottom: '20px',
    '&:hover': {
        backgroundColor: 'var(--light-red)',
        transition: 'all 0.3s',
    },
})

export const MainTypography = styled(Typography)({
    fontWeight: '500',
})

export const SubTypography = styled(Typography)({
    color: 'var(--gray)',
})

export const InfoUploadBox = styled(Box)({
    width: '100%',
    padding: '18px 30px',
    backgroundColor: 'white',
    color: 'var(--gray)',
    borderRadius: '10px',
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
})

export const ImgBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const StyledImg = styled('img')({
    objectFit: 'contain',
    [theme.breakpoints.up('xs')]: {
        width: '100%',
        height: '100%',
    },
})

export const ImgStyle = styled('img')({
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
    },
})

export const UploadButton = styled(StyledPageName)({
    fontSize: '12px',
    padding: '12px 30px',
    borderRadius: '10px',
    fontWeight: '400',
    cursor: 'pointer',
    '&:hover': {
        opacity: '0.8',
        transition: 'all 0.4s',
    },
})

export const BoxWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
})

export const StyledLink = styled('a')({
    color: 'var(--main-red)',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
        opacity: '0.6',
        transition: 'all 0.3s',
    },
})

export const StyledUploadBoxMain = styled(Button)({
    position: 'absolute',
    left: 0,
    width: '100%',
    textTransform: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
})

export const StyledUploadBox = styled(StyledUploadBoxMain)({
    backgroundColor: 'white',
    border: '4px dashed var(--light-red)',
})

export const StyledUploadBoxFail = styled(StyledUploadBoxMain)({
    backgroundColor: 'var(--light-red)',
    border: '4px dashed var(--main-red)',
})

// -- //
