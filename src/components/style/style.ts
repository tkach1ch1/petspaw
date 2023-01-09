import { Box, Fab, Typography, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme'
import '../../styles/styles.css'
import { NavLink as BaseNavLink } from 'react-router-dom'

// -- CircularProgress -- //

export const StyledCircularProgress = styled(CircularProgress)({
    position: 'absolute',
})

// -- //

// -- GridItem -- //
export const StyledItem = styled(Box)({
    position: 'relative',
    borderRadius: '20px',
    cursor: 'pointer',
    '&:nth-of-type(10n+1)': {
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 2',
    },
    '&:nth-of-type(10n+8)': {
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 2',
    },
    '&:nth-of-type(10n+4)': {
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 2',
    },
    '&:nth-of-type(10n+9)': {
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 2',
    },
})

export const LinkToInfoPage = styled(Link)({
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 134, 142, 0.6)',
    opacity: 0,
    '&: hover': {
        opacity: 1,
        transition: 'all 0.4s',
    },
})

export const StyledInfoButton = styled(Box)({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    border: 'none',
    color: 'var(--main-red)',
    textAlign: 'center',
    borderRadius: '10px',
})

export const StyledImg = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '20px',
})

export const AddToFavourites = styled(Box)({
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 134, 142, 0.6)',
    opacity: 0,
    '&: hover': {
        opacity: 1,
        transition: 'all 0.4s',
    },
})

// -- //

// -- GridPageLayout -- //

export const NoItemBox = styled(Box)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '18px 20px',
    backgroundColor: 'var(--main-gray)',
    color: 'var(--gray)',
    borderRadius: '10px',
})

// -- //

// -- InfoCommentVoting -- //

export const CommentWrapper = styled(Box)({
    backgroundColor: 'var(--main-gray)',
    borderRadius: '10px',
    marginTop: '20px',
})

export const CommentBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    [theme.breakpoints.up('xs')]: {
        padding: 0,
    },
    [theme.breakpoints.up('sm')]: {
        padding: '15px',
    },
})

export const TimeBox = styled(Box)({
    backgroundColor: 'white',
    color: 'var(--black)',
    padding: '3px 10px',
    borderRadius: '5px',
})

export const ImgStyle = styled('img')({
    width: '20px',
    height: '20px',
})

export const StyleId = styled('span')({
    fontWeight: '500',
    color: 'var(--black)',
})

// -- //

// -- MainBox -- //

export const StyledMainBox = styled(Box)({
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    position: 'relative',
    minHeight: '90%',
    height: '90%',
    overflow: 'hidden',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
        width: 0,
    },
    [theme.breakpoints.down('lg')]: {
        position: 'absolute',
        right: '0',
        left: '0',
    },
})

// -- //

//-- MainStyledButton -- //

export const StyledButton = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: 'var(--light-red)',
    color: 'var(--main-red)',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '10px',
    letterSpacing: '2px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'var(--main-red)',
        color: 'white',
        transition: 'all 0.4s',
    },
})

export const StyledTypography = styled(Typography)({
    fontSize: '12px',
    fontFamily: 'Jost',
    fontWeight: '500',
})

// -- //

// -- PageName -- //

export const StyledBackButton = styled(Box)({
    padding: '10px 14px',
    backgroundColor: 'var(--light-red)',
    borderRadius: '10px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'var(--main-red)',
        transition: 'all 0.3s',
    },
})

export const StyledPageName = styled(Box)({
    backgroundColor: 'var(--main-red)',
    padding: '5px 30px',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: '500',
    borderRadius: '10px',
    letterSpacing: '2px',
})

// -- //

// -- PageWrapper -- //

export const PageWrapperBox = styled(Box)({
    position: 'absolute',
    display: 'flex',
    maxHeight: '1200px',
    minWidth: '320px',
    bottom: '0',
    right: '0',
    top: '0',
    left: '0',
    [theme.breakpoints.up('xs')]: {
        margin: '20px',
    },
    [theme.breakpoints.up('sm')]: {
        margin: '30px',
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: '70px',
        display: 'flex',
        justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '30px',
        margin: '30px 60px',
    },
    [theme.breakpoints.up('xl')]: {
        gap: '90px',
        display: 'flex',
        justifyContent: 'center',
    },
})

// -- //

// -- ScrollToTop -- //

export const StyledToTopButton = styled(Fab)({
    backgroundColor: 'var(--main-gray)',
    '&:hover': {
        opacity: '0.7',
        transition: 'all 0.4s',
    },
})

export const ScrollBox = styled(Box)({
    position: 'fixed',
    bottom: 25,
    right: 16,
})

// -- //

// -- SelectComponent -- //

export const StyledFormControl = styled('select')({
    appearance: 'none',
    width: '100%',
    border: '2px solid transparent',
    outline: 'none',
    borderRadius: '10px',
    padding: '7px 10px',
    backgroundColor: 'var(--main-gray)',
    fontSize: '16px',
    fontFamily: 'Jost',
    color: 'var(--gray)',
    cursor: 'pointer',
    '&:hover': {
        border: '2px solid var(--light-red)',
        transition: 'all 0.3s',
    },
})

export const SelectCompImg = styled('img')({
    position: 'absolute',
    top: '17px',
    right: '10px',
    cursor: 'pointer',
})

// -- //

// -- StyledNavLink -- //

export const StyledBaseNavLinkText = styled(BaseNavLink)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
    textDecoration: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#ffffff',
    fontSize: '12px',
    letterSpacing: '2px',
    color: 'var(--main-red)',
    '&:hover': {
        color: 'var(--main-red)',
        backgroundColor: 'var(--light-red)',
        transition: '0.5s ease',
    },
})

// -- //
